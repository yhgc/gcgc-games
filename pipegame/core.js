/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 
 @version : V0.0.1 - 2026-11-07
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com

*/

var CNITEM_DEBUG = 0;

function cnItemByTag(text, itemgroup, node, textori) {
    for (let i in itemgroup) {
        if (i[0] == '.') {
            let current_node = node;
            while (current_node) {
                if (current_node.classList && current_node.classList.contains(i.substr(1))) return itemgroup[i];
                else if (current_node.parentElement && current_node.parentElement != document.documentElement) current_node = current_node.parentElement;
                else break;
            }
        } else if (i[0] == '#') {
            let current_node = node;
            while (current_node) {
                if (current_node.id == i.substr(1)) return itemgroup[i];
                else if (current_node.parentElement && current_node.parentElement != document.documentElement) current_node = current_node.parentElement;
                else break;
            }
        } else if (i[0] == '$') {
            if (document.querySelector(i.substr(1)) != null) return itemgroup[i];
        } else if (i[0] == '*') {
            if (textori.includes(i.substr(1))) return itemgroup[i];
        } else {
            CNITEM_DEBUG && console.log({ text, itemgroup, dsc: "不识别的标签" + i });
        }
    }
    return null;
}

var cnItem = function (text, node) {
    if (typeof (text) != "string") return text;
    if (typeof cnItems[text] === "string") return cnItems[text];
    let textori = text;
    let text_prefix = "", text_postfix = "", text_reg_exclude_postfix = "";
    for (let prefix in cnPrefix) {
        if (text.substr(0, prefix.length) === prefix) {
            text_prefix += cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    for (let postfix in cnPostfix) {
        if (text.substr(-postfix.length) === postfix) {
            text_postfix = cnPostfix[postfix] + text_postfix;
            text = text.substr(0, text.length - postfix.length);
        }
    }
    for (let reg of cnExcludePostfix) {
        let result = text.match(reg);
        if (result) {
            text_reg_exclude_postfix = result[0] + text_reg_exclude_postfix;
            text = text.substr(0, text.length - result[0].length);
        }
    }
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];
    for (let reg of cnExcludeWhole) {
        if (reg.test(text)) return text_prefix + text + text_reg_exclude_postfix + text_postfix;
    }
    for (let [key, value] of cnRegReplace.entries()) {
        if (key.test(text)) return text_prefix + text.replace(key, value) + text_reg_exclude_postfix + text_postfix;
    }
    for (let i in cnItems) {
        if (typeof (cnItems[i]) == "string" && (text == i || text == cnItems[i])) {
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
        } else if (typeof (cnItems[i]) == "object" && text == i) {
            let result = cnItemByTag(i, cnItems[i], node, textori);
            if (result != null) return text_prefix + result + text_reg_exclude_postfix + text_postfix;
        }
    }
    let save_text = text;
    for (let i = 0; i < cnItems._OTHER_.length; i++) {
        if (save_text == cnItems._OTHER_[i]) return text_prefix + text + text_reg_exclude_postfix + text_postfix;
    }
    if (cnItems._OTHER_.length < 1000) {
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort(function (a, b) { return a.localeCompare(b); });
    }
    CNITEM_DEBUG && console.log('有需要汉化的英文：', text);
    return text_prefix + text + text_reg_exclude_postfix + text_postfix;
};

transTaskMgr = {
    tasks: [],
    addTask: function (node, attr, text) { this.tasks.push({ node, attr, text }); },
    doTask: function () {
        let task = null;
        while (task = this.tasks.pop()) task.node[task.attr] = task.text;
    },
};

function TransSubTextNode(node) {
    if (node.childNodes.length > 0) {
        for (let subnode of node.childNodes) {
            if (subnode.nodeName === "#text") {
                let text = subnode.textContent;
                let cnText = cnItem(text, subnode);
                cnText !== text && transTaskMgr.addTask(subnode, 'textContent', cnText);
            } else if (subnode.nodeName !== "SCRIPT" && subnode.nodeName !== "STYLE" && subnode.nodeName !== "TEXTAREA") {
                if (!subnode.childNodes || subnode.childNodes.length == 0) {
                    let text = subnode.innerText;
                    let cnText = cnItem(text, subnode);
                    cnText !== text && transTaskMgr.addTask(subnode, 'innerText', cnText);
                } else {
                    TransSubTextNode(subnode);
                }
            }
        }
    }
}

!function () {
    console.log("加载汉化模块");
    var fill = CanvasRenderingContext2D.prototype.fillText;
    var stroke = CanvasRenderingContext2D.prototype.strokeText;
    function cnFont(font) {
        return ((String(font).match(/\d+px/) || ['16px'])[0]) + ' "Noto Sans CJK SC","Noto Sans SC","WenQuanYi Micro Hei",sans-serif';
    }
    CanvasRenderingContext2D.prototype.fillText = function (text, x, y, max) {
        var cn = cnItem(String(text));
        if (cn !== text) this.font = cnFont(this.font);
        return max === undefined ? fill.call(this, cn, x, y) : fill.call(this, cn, x, y, max);
    };
    CanvasRenderingContext2D.prototype.strokeText = function (text, x, y, max) {
        var cn = cnItem(String(text));
        if (cn !== text) this.font = cnFont(this.font);
        return max === undefined ? stroke.call(this, cn, x, y) : stroke.call(this, cn, x, y, max);
    };

    function cnPatchNode(node) {
        if (!node || node.nodeType !== 1) return;
        if (node.nodeName === "SCRIPT" || node.nodeName === "STYLE" || node.nodeName === "TEXTAREA") return;
        if (!node.childNodes || node.childNodes.length === 0) {
            if (node.innerText) node.innerText = cnItem(node.innerText, node);
        } else {
            TransSubTextNode(node);
            transTaskMgr.doTask();
        }
    }
    var _appendChild = Node.prototype.appendChild;
    Node.prototype.appendChild = function (child) {
        var ret = _appendChild.call(this, child);
        cnPatchNode(child);
        return ret;
    };
    var _confirm = window.confirm;
    window.confirm = function (msg) {
        return _confirm.call(window, cnItem(String(msg)));
    };

    let observer_config = { attributes: false, characterData: true, childList: true, subtree: true };
    let targetNode = document.body;
    function start() {
        TransSubTextNode(targetNode);
        transTaskMgr.doTask();
        let observer = new MutationObserver(function (e) {
            observer.disconnect();
            for (let mutation of e) {
                if (mutation.target.nodeName === "SCRIPT" || mutation.target.nodeName === "STYLE" || mutation.target.nodeName === "TEXTAREA") continue;
                if (mutation.target.nodeName === "#text") {
                    mutation.target.textContent = cnItem(mutation.target.textContent, mutation.target);
                } else if (!mutation.target.childNodes || mutation.target.childNodes.length == 0) {
                    mutation.target.innerText = cnItem(mutation.target.innerText, mutation.target);
                } else if (mutation.addedNodes.length > 0) {
                    for (let node of mutation.addedNodes) {
                        if (node.nodeName === "#text") node.textContent = cnItem(node.textContent, node);
                        else if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE" && node.nodeName !== "TEXTAREA") {
                            if (!node.childNodes || node.childNodes.length == 0) {
                                if (node.innerText) node.innerText = cnItem(node.innerText, node);
                            } else {
                                TransSubTextNode(node);
                                transTaskMgr.doTask();
                            }
                        }
                    }
                }
            }
            observer.observe(targetNode, observer_config);
        });
        observer.observe(targetNode, observer_config);
    }
    if (document.body) start();
    else document.addEventListener('DOMContentLoaded', start);
    document.addEventListener("DOMContentLoaded", function () {
        var orig = drawTooltip;
        drawTooltip = function (text, x, y, side, width, lines) {
            return orig(typeof text === "string" ? cnItem(text) : text, x, y, side, width, lines);
        };
    });
}();
