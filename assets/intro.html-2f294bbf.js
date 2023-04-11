import { _ as _export_sfc, n as resolveComponent, p as openBlock, q as createElementBlock, s as createBaseVNode, R as createTextVNode, t as createVNode, Z as createStaticVNode } from "./framework-847321c2.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h3 id="introduction-tips" tabindex="-1"><a class="header-anchor" href="#introduction-tips" aria-hidden="true">#</a> Introduction &amp; Tips</h3><ol><li><code>ChatFlow</code>是一个基于<code>ChatGPT</code>搭建的系列项目，旨在为用户提供安全、方便的语言交互服务。该项目包含两个子项目：<code>ChatFlow-bot</code>和<code>ChatFlow-academic(即将上线)</code>。</li></ol><ul><li><p><code>ChatFlow-bot</code>是一个基于<code>ChatGPT语言模型</code>的类聊天室，旨在为用户提供有趣、有用的聊天机器人服务。用户可以使用<code>ChatFlow-bot</code>与<code>ChatGPT</code>进行有趣的对话，获取各种信息和知识。</p></li><li><p><code>ChatFlow-academic</code>是一个基于<code>ChatGPT</code>的在线学习平台，旨在为用户提供高质量、个性化的学习体验, 包括但不限于<code>提取论文关键字</code>、<code>中英文高质量互译</code>、<code>解释代码</code>、<code>文章润色</code>。用户可以通过<code>ChatFlow-academic</code>选择自己感兴趣的主题，并与机器人进行互动，获取有关该主题的详细信息和解答。</p></li><li><p>目前，<code>ChatFlow</code>系列项目正在搭建<code>中枢登录认证系统</code>，旨在为用户提供更加安全、方便的登录认证服务。该系统采用了最先进的加密技术和安全认证机制，保障用户的账户安全。同时，该系统还提供了多种认证方式，包括邮箱认证、密码认证、JWT等，满足不同用户的认证需求。</p></li><li><p>总之，<code>ChatFlow系列项目</code>旨在为用户提供安全、有趣、个性化的语言交互服务。<code>ChatFlow-bot</code>和<code>ChatFlow-academic</code>是两个子项目，分别为用户提供有趣的聊天机器人和高质量的在线学习体验。而中枢登录认证系统是该系列项目的重要组成部分，旨在为用户提供更加安全、方便的登录认证服务。</p></li></ul><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h2><p><strong>ChatFlow-bot</strong></p><ul><li>2023/04/01 <code>v1.0.0 beta</code> 发布 运行框架完成</li><li>2023/04/02 <code>v1.0.0 beta2</code> 发布 实现聊天等基本功能 UI优化</li><li>2023/04/03 <code>v1.0.0</code> 正式版 发布上线</li><li>2023/04/04 <code>v1.0.1</code> 发布上线 优化多语言 自定义主题(light/dark) 新增prompt功能</li><li>2023/04/05 <code>v1.0.2</code> 优化上线 增加授权码验证 采用<code>哈希</code>加密方式 优化多语言以及对设置页面做部分改动</li></ul><p><strong>ChatFlow-academic</strong></p><ul><li>2023/04/03 立项</li><li>2023/04/04 <code>v1.0.0 beta</code> 测试发布 部分功能完成</li><li>developing...</li></ul><p><strong>API</strong></p><ul><li>2023/04/01 <code>v1.0.0</code> 发布上线 <ul><li>实现双线API架构</li><li>国内线路：`https://openai.huangtz.email&#39;</li><li>海外线路: `https://openai-api.huangtz.email&#39;</li></ul></li></ul><h2 id="play-together" tabindex="-1"><a class="header-anchor" href="#play-together" aria-hidden="true">#</a> Play Together</h2><h3 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h3><p>还是衷心地希望能有更多的朋友参与进来，更快地去完善它。接下来时间允许的情况下，我会开源大部分项目源代码，略过配置步骤，直接上手使用，这也是我逐渐形成的一种信念，就是希望能让这个项目，功能越完善，使用越来越简单。</p><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>', 14);
const _hoisted_15 = {
  href: "https://github.com/kattgu7/Anti-996-License/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_15, [
        createTextVNode("Anti-996"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
const intro_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "intro.html.vue"]]);
export {
  intro_html as default
};
