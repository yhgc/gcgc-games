/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 
 @version : V0.0.1 - 2026-11-07
 @website : http://www.g8hh.com

 原评论：
 可以用分成两分并加分,使三角形(我在其机器中得分超过1e14,而屏幕上可以显示的三角形数量则受限)并增加数值(A6)。
 T6 + 分体式转换器 = 无限三角形生成器
 我刚刚完成了一座漂亮的V1-V8三角动力工厂,这需要许多分体式改造,并拥有一条漫长的三角之路。满意且满意,我看看即将到来的升级,它又说了什么?删除所有V1-V8三角形,因为它们现已过时。
*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    'Fast time': '快速时间',
    'FPS': '帧率',
    'Inv': '库存',
    'Upg': '升级',
    'Loading...': '加载中...',
    'Loading images can take a while when you first open the game!': '首次打开游戏时，加载图片可能需要一些时间！',

    'Drops ■ worth $1. (Tier 1)': '掉落 ■，价值 $1。（1 级）',
    'Drops ■ worth $10. (Tier 2)': '掉落 ■，价值 $10。（2 级）',
    'Drops ■ worth $50. (Tier 3)': '掉落 ■，价值 $50。（3 级）',
    'Drops ■ worth $999. (Tier 4)': '掉落 ■，价值 $999。（4 级）',
    'Drops ■ worth $5,000. (Tier 5)': '掉落 ■，价值 $5000。（5 级）',
    'Drops ■ worth $50,000. (Tier 6)': '掉落 ■，价值 $50k。（6 级）',
    'Drops ■ worth $250,000. (Tier 7)': '掉落 ■，价值 $250k。（7 级）',
    "Drops ■ worth $500,000 that can't be destroyed by Tier 6 Upgraders. (Tier 8)": '掉落 ■，价值 $500k。（8 级），无法被 6 级升级器摧毁。',
    'Drops ■ worth $5.00e6. (Tier 9)': '掉落 ■，价值 $5.00e6。（9 级）',
    'Drops ■ worth $2.50e8. (Tier 10)': '掉落 ■，价值 $2.50e8。（10 级）',
    'Drops ■ worth $2.0e10 with the Irradiated effect ($1.0e10 subtracted from value before each upgrade). (Tier 11)': '掉落 ■，价值 $2.0e10。（11 级），具有辐射效果（每次升级前从价值中减去 $1.0e10）。',
    'Drops ■ worth $5.0e11. (Tier 12)': '掉落 ■，价值 $5.0e11。（12 级）',

    'Sells ■ for x1 money. (Tier 1)': '出售 ■ x1 金钱。（1 级）',
    'Sells ■ for x2 money. (Tier 2)': '出售 ■ x2 金钱。（2 级）',
    'Sells ■ for x4 money. (Tier 3)': '出售 ■ x4 金钱。（3 级）',
    'Sells ■ for x50 money if they have gone through 14 or fewer upgraders. Otherwise, sell for x2. (Tier 4)': '出售 ■ x50 金钱，如果它们已经通过了 14 个或更少的升级器。否则，出售为 x2。（4 级）',
    'Sells ■ for x8 money. (Tier 5)': '出售 ■ x8 金钱。（5 级）',
    'Sells ■ for x50 money if they have the Burning effect. Otherwise, sell for x1. (Tier 6)': '出售 ■ x50 金钱，如果它们具有燃烧效果。否则，出售为 x1。（6 级）',
    "Sells ■ for x500 money if they haven't been through a Tier 7 upgrader. Otherwise, sell for x1. (Tier 7)": '出售 ■ x500 金钱，如果它们没有经过 7 级升级器。否则，出售为 x1。（7 级）',
    'Sells ■ for x64 money. (Tier 8)': '出售 ■ x64 金钱。（8 级）',
    '(Requires ▲5) Sells ■ for x250 money. Sell for x1 if there is not enough ▲. (Tier T1)':'(需要 ▲ 5)出售 ■ x250 金钱。如果 ▲ 不足，出售为 x1。（T1 级）',
    '(▲500) Sells ■ for x2,500 money. Sell for x100 if there is not enough ▲. (Tier T2)':'(▲ 500)出售 ■ x2500 金钱。如果 ▲ 不足，出售为 x100。（T2 级）',
    '(▲1,000) Sells ■ for x10,000 money if they have no effects. Sell for x250 if there is not enough ▲ OR the chunk has ANY effects. (Tier T3)':'(▲ 1,000)出售 ■ x10,000 金钱，如果它们没有效果。如果 ▲ 不足，或者块具有任何效果，出售为 x250。（T3 级）',
    '(▲1.00e6) Sells ■ for x50,000 money. Sell for x2,500 if there is not enough ▲. (Tier T4)':'(▲ 1.00e6)出售 ■ x50k 金钱。如果 ▲ 不足，出售为 x2500。（T4 级）',

    'Moves chunks at x1 speed permanently. (Tier 1)': '以 x1 速度永久移动块。（1 级）',
    'Moves chunks at x2 speed permanently. (Tier 2)': '以 x2 速度永久移动块。（2 级）',
    'Moves chunks at x3 speed permanently. (Tier 3)': '以 x3 速度永久移动块。（3 级）',
    'Moves chunks at x4 speed permanently. (Tier 4)': '以 x4 速度永久移动块。（4 级）',
    'Moves chunks at x5 speed permanently. (Tier 5)': '以 x5 速度永久移动块。（5 级）',
    'Moves chunks at x6 speed permanently. (Tier 6)': '以 x6 速度永久移动块。（6 级）',
    'Moves chunks at x10 speed permanently. (Tier 7)': '以 x10 速度永久移动块。（7 级）',

    'Adds $1 to the value of a ■. Infinite uses. (Tier 1)': '增加 $1 到块的价值。无限使用。（1 级）',
    'Adds $5 to the value of a ■. Infinite uses. (Tier 2)': '增加 $5 到块的价值。无限使用。（2 级）',
    'Multiplies ■ value by 1.3. Has no effect after 5th use per ■. (Tier 3)': '将 ■ 的价值乘以 1.3。每个 ■ 最多使用 5 次后无效果。（3 级）',
    'Multiplies ■ value by 2, if the ■ is worth less than $1,000 (Tier 4)': '如果 ■ 价值小于 $1,000，将 ■ 的价值乘以 2。（4 级）',
    'Multiplies ■ value by 2. Has no effect after 1st use. (Tier 5)': '将 ■ 的价值乘以 2。第一次使用后无效果。（5 级）',
    'Multiplies ■ value by 2, but has a 20% chance to destroy it. Has no multiplier nor destruction chance after 5th use. (Tier 6)': '将 ■ 的价值乘以 2，但有 20% 的几率摧毁它。第 5 次使用后无倍率或摧毁几率。（6 级）',
    'Multiplies ■ value by 1.5. Has no effect after 7th use. (Tier 7)': '将 ■ 的价值乘以 1.5。第 7 次使用后无效果。（7 级）',
    'Adds $10,000 to ■ value. Infinite uses. (Tier 8)': '增加 $10k 到块的价值。无限使用。（8 级）',
    'Multiplies ■ value by 5, but applies the Burning effect (divides value by 1.1 every following upgrader). Has no effect after 1st use. (Tier 9)': '将 ■ 的价值乘以 5，但应用燃烧效果（每个后续升级器将价值除以 1.1）。第一次使用后无效果。（9 级）',
    'Multiplies ■ value by 3 if the Burning effect is applied. Removes Burning effect, but applies Frigid effect (has no effect). (Tier 10)': '如果燃烧效果已应用，将 ■ 的价值乘以 3。移除燃烧效果，但应用冰冻效果（无效果）。（10 级）',
    'Multiplies ■ value by 6 if the ■ has not gone through any upgraders yet. (Tier 11)': '如果 ■ 还没有通过任何升级器，将 ■ 的价值乘以 6。（11 级）',
    'Multiplies ■ value by 2.5 if the ■ is going at x1 speed. Has no effect after 3rd use. (Tier 12)': '如果 ■ 以 x1 速度移动，将 ■ 的价值乘以 2.5。第 3 次使用后无效果。（12 级）',
    'Multiplies ■ value by 2. Has no effect after 5th use. Shares use cap with Tier 3 upgrader. (Tier 13)': '将 ■ 的价值乘以 2。第 5 次使用后无效果。与 3 级升级器共享使用上限。（13 级）',
    "Multiplies ■ value by 1.1 if the ■ is worth less than $2.50e7. (Hint: Maybe you don't need a long chain of these..?)  (Tier 14)": '如果 ■ 价值小于 $2.50e7，将 ■ 的价值乘以 1.1。（提示：你可能不需要这么长的链。）（14 级）',
    'Multiplies ■ value by 3. Has no effect after 3rd use. (Tier 15)': '将 ■ 的价值乘以 3。第 3 次使用后无效果。（15 级）',
    'Multiplies ■ value by 2. Applies the Tough effect (immunity to destruction by Tier 6 Upgraders). Has no effect after 1st use. (Tier 16)': '将 ■ 的价值乘以 2。应用坚韧效果（对 6 级升级器的破坏免疫）。第一次使用后无效果。（16 级）',
    'Adds $1.00e8 to ■ value. Infinite uses. (Tier 17)': '增加 $1.00e8 到块的价值。无限使用。（17 级）',
    'Removes Tough and Irradiated effects and multiplies ■ value by 2.5. Has no effect after 1st use. (Tier 18)': '移除坚韧和辐射效果，并将 ■ 的价值乘以 2.5。第一次使用后无效果。（18 级）',
    'Multiplies ■ value by 64. Only works if no Tier 7 upgraders have been used. Prevents the use of Tier 7 upgraders. Has no effect after 1st use. (Tier 19)': '将 ■ 的价值乘以 64。仅在未使用 7 级升级器时有效。阻止使用 7 级升级器。第一次使用后无效果。（19 级）',
    'Multiplies ■ value by 100. Only works if no Tier 3/13 upgraders have been used. Prevents the use of Tier 3/13 upgraders. Has no effect after 1st use. (Tier 20)': '将 ■ 的价值乘以 100。仅在未使用 3/13 级升级器时有效。阻止使用 3/13 级升级器。第一次使用后无效果。（20 级）',
    'Multiplies ■ value by 10,000. Only works if no Tier 1 thru 10 upgraders have been used. Prevents the use of Tier 1 thru 10 upgraders. Has no effect after 1st use. (Tier 21)': '将 ■ 的价值乘以 10,000。仅在未使用 1 到 10 级升级器时有效。阻止使用 1 到 10 级升级器。第一次使用后无效果。（21 级）',
    'Multiplies ■ value by 5 if the ■ is going at x5 speed. Has no effect after 3rd use. Shares use cap with Tier 12 upgrader (Tier 22)': '如果 ■ 以 x5 速度移动，将 ■ 的价值乘以 5。第 3 次使用后无效果。与 12 级升级器共享使用上限。（22 级）',
    'Resets the use cap of Tier 12/22 upgraders, but raises ■ value by 0.8. Has no effect after 3rd use.': '重置 12/22 级升级器的使用上限，但将 ■ 价值提高 0.8 倍。第 3 次使用后无效果。（23 级）',

    'Drops... triangles? What? (Hint: There is no triangle cap!) (Tier T1)': '掉落...三角形？（提示：没有三角形上限！）（T1 级）',
    'Drops ▲ worth ▲5. (Tier T2)': '掉落 ▲ 价值 ▲ 5。（T2 级）',
    'Drops ▲ worth ▲20. (Tier T3)': '掉落 ▲ 价值 ▲ 20。（T3 级）',
    'Drops ▲ worth ▲50. (Tier T4)': '掉落 ▲ 价值 ▲ 50。（T4 级）',
    'Drops ▲ worth ▲2,500. (Tier T5)': '掉落 ▲ 价值 ▲ 2500。（T5 级）',

    '(Requires ▲1 to be inputted per ■ to work) Multiplies ■ value by 10. Has no effect after 1st use. (Tier V1)': '(需要每颗 ■ 输入 ▲1 才能生效) 将 ■ 的价值乘以 10。第一次使用后无效果。（V1 级）',
    '(Requires ▲1 to be inputted work) Multiplies ■ value by 3. Has no effect after 1st use. (Tier V2)': '(需要输入 ▲1 才能生效) 将 ■ 的价值乘以 3。第一次使用后无效果。（V2 级）',
    '(Requires ▲2 to work) Multiplies ■ value by 5. Has no effect after 1st use. (Tier V3)': '(需要 ▲2 才能生效) 将 ■ 的价值乘以 5。第一次使用后无效果。（V3 级）',
    '(Requires ▲4) Multiplies ■ value by 3.3. Has no effect after 1st use. (Tier V4)': '(需要 ▲4) 将 ■ 的价值乘以 3.3。第一次使用后无效果。（V4 级）',
    '(▲20) Multiplies ■ value by 2. Has no effect after 2nd use. (Tier V5)': '(▲ 20)将 ■ 的价值乘以 2。第二次使用后无效果。（V5 级）',
    '(▲750) Multiplies ■ value by 4. Has no effect after 1st use. (Tier V6)': '(▲ 750)将 ■ 的价值乘以 4。第一次使用后无效果。（V6 级）',
    '(▲1,000) Multiplies ■ value by 1.5, and removes the Frigid effect. Has no effect after 1st use. (Tier V7)': '(▲ 1000)将 ■ 的价值乘以 1.5。移除冰冻效果。第一次使用后无效果。（V7 级）',
    '(▲500,000) Multiplies ■ value by 10. Has no effect after 2nd use. (Tier V8)': '(▲ 500k)将 ■ 的价值乘以 10。第二次使用后无效果。（V8 级）',
    "(▲1.00e7) Multiplies ■ value by 1.00e7. Prevents use of tier V1 thru V8 upgraders. Can't be used if any tier V1 thru V8 upgraders have been used. Has no effect after 1st use. (Tier V9)": '(▲ 10M)将 ■ 的价值乘以 10M。阻止使用 V1 到 V8 级升级器。如果任何 V1 到 V8 级升级器已被使用，则无法使用。第一次使用后无效果。（V9 级）',

    'Multiplies ▲ value by 2. Has no effect after 2nd use. (Tier A1)': '将 ▲ 的价值乘以 2。第二次使用后无效果。（A1 级）',
    'Multiplies ▲ value by 3. Has no effect after 1st use. (Tier A2)': '将 ▲ 的价值乘以 3。第一次使用后无效果。（A2 级）',
    'Multiplies ▲ value by 5 if it has gone through 4 or more upgraders. Has no effect after 1st use. (Tier A3)': '如果 ▲ 已经通过了 4 个或更多的升级器，将 ▲ 的价值乘以 5。第一次使用后无效果。（A3 级）',
    'Adds 1 max use to Tier T1 ▲ Upgrader, and multiplies ▲ value by 1.5. Has no effect after 1st use. (Tier A4)': '将 1 个最大使用添加到 T1 ▲ 升级器，并将 ▲ 的价值乘以 1.5。第一次使用后无效果。（A4 级）',
    'Multiplies ▲ value by 3, but has a 20% chance to destroy it. Has no effect after 2nd use. (Tier A5)': '将 ▲ 的价值乘以 3，但有 20% 的几率摧毁它。第二次使用后无效果。（A5 级）',
    'Adds ▲250 to ▲ value. Infinite uses. (Tier A6)': '将 ▲ 250 添加到 ▲ 价值。无限使用。（A6 级）',
    'Multiplies ▲ value by 1.4. Has no effect after 5th use. (Tier A7)': '将 ▲ 的价值乘以 1.4。第 5 次使用后无效果。（A7 级）',

    'Moves chunks. Rotates itself by 180° after every chunk. (Tier 7)': '移动块。每经过一个块旋转自身 180°。（7 级）',
    'Splits ▲ in half. Sends one going in each direction worth 1/2 the value of what was inputted. (Tier 7)': '将 A 分成两半。分别向两个方向发送价值为输入值的一半的块。（7 级）',
    'Moves chunks. Rotates back and forth 90° after every chunk. (Tier 7)': '移动块。每经过一个块交替旋转自身 90°。（7 级）',

    'My man! (Hint: Nuberts have no use.) (Tier ∞)': '我的朋友！（提示：Nuberts 没有用途。）（∞ 级）',
    'My... woman? (Tier T∞)': '我的...女人？（∞ 级）',
    'Drops... Nubert? What the fuck? (Drops retextured ■ worth $1.0e12.) (Tier 13)': '掉落...Nubert？什么鬼？（掉落重新着色，价值 $1.0e12。）（13 级）',

    'Multiplies ■ value by the number of Shards you have. Has no effect after 1st use. (Tier R1)': '将 ■ 的价值乘以你拥有的碎片数量。第一次使用后无效果。（R1 级）',
    'Multiplies ▲ value by the number of Shards you have. Has no effect after 1st use. (Tier R1)': '将 ▲ 的价值乘以你拥有的碎片数量。第一次使用后无效果。（R1 级）',
    'Sells ■ for a multiplier equal to the number of Shards you have. (Tier R1)': '出售 ■ 乘以你拥有的碎片数量。（R1 级）',

    'Are you sure?': '你确定么？',
    "oh... who's there..?": '哦……谁在那儿……？',
    'who are you..?': '你是谁……？',
    "that's a nice name...": '名字真好听……',
    'but... why are you here..?': '可是……你为什么在这儿……？',
    'oh...': '哦……',
    "i'm not sure if i could...": '我不确定我做不做得到……',
    "that's a lot to ask of me...": '你这要求可不小……',
    'why should I do it for you..?': '我为什么要替你这么做……？',
    'i mean... if you say so...': '好吧……既然你这么说……',
    'here i gooooooooo..........': '那我上啦啊啊啊啊啊啊……',

    'Dark Mode': '暗色模式',
    'Dark Mode:': '暗色模式：',
    'Live Analysis Update': '实时分析更新器',
    'Live Analysis Update:': '实时分析更新：',
    'Mobile Controls': '移动控制',
    'Mobile Controls:': '移动控制：',
    'Unpause': '继续',
    '+10 Shards': '+10 碎片',
    'x2 Shards': '碎片 x2',
    'DEL': '删',
    'MERGE': '合并',
    'SOLD': '已售',
    'WASTE': '浪费',
    'Are you sure you want to delete your save?': '确定要删除存档吗？',
    'Delete Save': '删除保存',
    'Pause': '暂停',
    'Export': '导出',
    'Import': '导入',
    'Zoom level': '缩放级别',
    '[Shift] LMB - Copy block': '[Shift] 左键 - 复制块',
    '[Shift] Drag - Place Multiple': '[Shift] 拖动 - 放置多个',
    'Drag RMB - Delete Multiple': '拖动右键 - 删除多个',
    '(click here)': '(点击这里)',
    'Rebirth': '转生',
    'Req': '需求', 
    'Shards': '碎片',
    'Resets Factory': '重置工厂',
    'Resets Money': '重置金钱',
    'Removes Nubert': '删除 Nubert',
    'New Blocks': '新块',
    'Decor Items': '装饰物品',
};

//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": "",
    ": ": "： ",
};

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
};

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/,
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/,
    /^\s*$/,
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/,
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/,
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/,
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/,
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/,
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/,
];

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^(\d+\/\d+) images loaded\.$/, '$1 张图片已加载。'],
    [/^(\d+) seconds$/, '$1 秒'],
    [/^Level (\d+) Tree Spawn$/, '$1 级树刷新'],
    [/^(\d+) New Blocks$/, '$1 新块'],
    [/^(\d+) Decor Items$/, '$1 装饰物品'],
    [/^Zoom level: ([\d\.]+)$/, '缩放：$1'],
    [/^Approx\. of (\d+) ▲$/, '约 $1 个 ▲'],
]);

/*
 容量增加：player.maxGens = 60
 钱增加：player.money = D("7e30") 一旦使用直接死档，仅用于翻译

*/
