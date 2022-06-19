## 说明

[此仓库](https://github.com/ProxyStorage/For-Own-Use)用于存储我个人日常使用的代理工具（Surge、QuantumultX、Loon）配置以及相关涉及到的脚本和规则。

其中配置与脚本无特殊说明均来自于其他大佬，这里不做一一列举（~~因为大多数已经找不到出处了~~）。

关于配置文件中所使用的引用说明：

1. 分流、重写、脚本引用说明

   此类能直接引用源出处的则直接引用源出处，但可能会有 源出处过于分散，而我做一个整理将其合并为一个配置文件 的情况。

2. 分流/策略说明

   我本人日常是不看奈菲、迪士尼等流媒体站的，偶尔会看一下 emby，因此对于流媒体之类的分流/策略可能过于简单。
   此仓库内的配置文件中，圈x、surge、Loon 节点筛选均依赖于 sub-store 做详细的筛选，配置文件中的正则筛选仅为简单过滤。

   ~~对于其他的，我个人认为还算是比较全面的分流策略~~

3. 定时类脚本说明

   我的定时类脚本均在服务器进行，因此我的配置文件不会出现定时类的脚本。

4. 节点订阅

   为了防止订阅泄露和便于管理节点订阅，因此我的日常习惯是通过[Sub-Store](https://github.com/Peng-YM/Sub-Store)管理订阅节点。

## 快速开始

此部分介绍如何使用此配置。

✨ 大量去广告规则与重写脚本

🎉~~比较全面~~的分流规则

🎁 一些常用的重写：[boxjs](https://chavyleung.gitbook.io/boxjs/)、[Sub-Store](https://www.notion.so/Sub-Store-6259586994d34c11a4ced5c406264b46)、京东比价等

🧨 一些个人使用的解锁：Spotify、Tiktok

🎨 个人自用，更新与需求并进

打开相应代理软件，并导入配置。默认的节点配置为`https://sub.store/download/collection/node`。

我个人比较喜欢将所有节点订阅整合成一个节点订阅并导入，因此配置文件中的所有节点订阅均为此节点。

如果你不喜欢使用 subStore 管理订阅节点，那么你则需要自己修改订阅策略

### 关于节点剩余流量

### Surge

再次软件中，可以通过使用自定义 Pannel 来查看

### Loon、QuantumultX

部分机场在订阅时会显示流量剩余情况，但部分机场无显示。此时可以尝试使用机场的原始订阅。

## Sub-Store脚本

本仓库暂不考虑将产物放入仓库，因此此仓库的脚本需要到[jsdelivr](https://cdn.jsdelivr.net/npm/proxy-script/)或[unpkg](https://unpkg.com/browse/proxy-script/)等NPM镜像处查找

### 节点重命名

1. [rename](https://unpkg.com/proxy-script/substore/rename.js)

   效果预览：[https://proxystorage.github.io/For-Own-Use/](https://proxystorage.github.io/For-Own-Use/)

   支持参数
   
   |    参数    |                        示例                         |                             说明                             |
   | :--------: | :-------------------------------------------------: | :----------------------------------------------------------: |
   | `airport`  |                      `Flower`                       |                        用于标识该机场                        |
   |   `test`   |                       `false`                       |            如果你不是在开发脚本，则可以忽略此参数            |
   | `template` | `{flag}「{airport}」{location} {modified} {number}` | 节点名称渲染模板。示例渲染的结果为：`国旗 +「机场名」 + 地区 + 修饰 + 编号` |
   | `location` |                        `zh`                         | 地区名输出格式，可选择参数`zh`、`enShort`、`enShortThree`、`enFull` |
   | `modified` |                        `zh`                         | 修饰符（例如标准、高级等）输出格式，可选择参数`zh`、`enShort`、`enFull` |
   
   - 示例1：只标识机场名
   
     `https://unpkg.com/proxy-script/substore/rename.js#airport=flower`
   
   - 示例2：标识机场名 并 地区使用中文
   
     `https://unpkg.com/proxy-script/substore/rename.js#airport=flower&location=zh`
     
     示例3：标识机场名 并 地区使用三字母的简称
     
     `https://unpkg.com/proxy-script/substore/rename.js#airport=flower&location=enShortThree`
   
   <details> 
       <summary>更多自定义</summary> 
       <b>自定义需要有充足的JavaScript、TypeScript基础</b><br />
       <b>自定义需要有充足的JavaScript、TypeScript基础</b><br />
       <b>自定义需要有充足的JavaScript、TypeScript基础</b><br />
       <p></p>
       <p>地区部分和修饰部分如果不传入则优先优先使用custom字段，如无custom字段则使用全称字段。（修饰字段为enShort）</p>
       <p>由于逻辑原因，无论是地区还是修饰匹配，均为匹配到一次则退出匹配。因此可能会出现由于顺序原因导致的不正确现象。</p>
       <p>地区、修饰符等调整参考：`src/substore/utils/location.ts`</p>
       <p>输出名称格式调整：`src/substore/common/rename.ts`</p>
   </details>
   
   
   > 同类型脚本：[reanme.js](https://raw.githubusercontent.com/futurkk/Potato/main/Rename/rename.js)
   >
   > 效果预览：[https://proxystorage.github.io/For-Own-Use/futurkk.html](https://proxystorage.github.io/For-Own-Use/futurkk.html)
   
2. [fingerprint](https://unpkg.com/proxy-script/substore/fingerprint.js)

   为节点添加指纹证书。内置支持的机场参考：[fingerprint.ts](https://github.com/ProxyStorage/For-Own-Use/blob/master/src/substore/utils/fingerprint.ts)。

   脚本接受参数

   |   参数    |  示例值  |                             说明                             |
   | :-------: | :------: | :----------------------------------------------------------: |
   | `airport` | `flower` | [fingerprint.ts](https://github.com/ProxyStorage/For-Own-Use/blob/master/src/substore/utils/fingerprint.ts)脚本中定义的键(不区分大小写)<br />即传入 `Flower`、`flower`、`FLOWER`都是等效的 |
   | `custom`  | `xxxxx`  |         如果脚本中无内置证书，则传入此参数自定义证书         |

   - 示例1：使用内置指纹（花云）

     `https://unpkg.com/proxy-script/substore/fingerprint.js#airport=flower`

     `https://unpkg.com/proxy-script/substore/fingerprint.js#airport=Flower`

   - 示例2：使用自定义指纹
   
     `https://unpkg.com/proxy-script/substore/fingerprint.js#custom=bbc820c1848bab9d41457c1cdf0c0f7a1eed6e21f7ed5e67359b158cc7fe4cb4`

## 关于更新

更新优先级：Surge 、 Loon 、 QuantumultX 一切随缘更新。但优先更新 Surge 和 Loon

**以下所述为个人体验观点，可能受软件更新导致此表的时效性问题，也受本人能力（即不清楚此软件的写法）问题导致此表只具备参考价值，实际请以真实软件为准**

1. 策略组灵活性调整

   > 一个策略组种即包含其他策略组也包含节点信息，且节点更新（重命名、删除）不会导致配置文件的错误。

   - Surge

     通过 include 参数可以将其融合为一个策略组，而不是套娃在建立一个新的策略组。

   - Loon

     通过筛选订阅节点几乎可以做到任意组合

   - QuantumultX

     目前仅能通过节点套娃的方式。即新建一个正则策略组套用与分流策略组里（为了不影响其他分流策略选择的节点）

2. 解锁查询

   > 例如 NF、迪士尼解锁等

   - surge

     可以通过自定义 pannel 实现

   - Loon

     通过脚本可实现

   - QuantumultX

     通过脚本可实现

3. 策略组/分流/订阅禁用

   - surge

     支持分流禁用

   - Loon

     支持分流禁用

   - QuantumultX

     支持分流/订阅禁用

4. 机场流量查询

   > 因为我个人习惯使用 subStore 管理订阅，因此如果合并订阅会导致原订阅地址请求头内的流量信息无法使用

   - Surge

     可以通过自定义 pannel 实现

   - Loon

     将订阅分离后可以看到

   - QuantumultX

     将订阅分离后可以看到

5. 其他

   - Surge

     自带的流量统计很不错，可以看到的信息很详细。

   - Loon

     统计很精简，只能看到走了代理、WiFi、直连走了多少流量，无法细分

   - QuantumultX

     可以看到各个策略的流量消耗
