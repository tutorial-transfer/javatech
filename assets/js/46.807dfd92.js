(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{433:function(t,a,s){"use strict";s.r(a);var e=s(13),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"tomcat-优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat-优化"}},[t._v("#")]),t._v(" Tomcat 优化")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#1-tomcat-%E5%90%AF%E5%8A%A8%E4%BC%98%E5%8C%96"}},[t._v("1. Tomcat 启动优化")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#11-%E6%B8%85%E7%90%86-tomcat"}},[t._v("1.1. 清理 Tomcat")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#12-%E7%A6%81%E6%AD%A2-tomcat-tld-%E6%89%AB%E6%8F%8F"}},[t._v("1.2. 禁止 Tomcat TLD 扫描")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#13-%E5%85%B3%E9%97%AD-websocket-%E6%94%AF%E6%8C%81"}},[t._v("1.3. 关闭 WebSocket 支持")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#14-%E5%85%B3%E9%97%AD-jsp-%E6%94%AF%E6%8C%81"}},[t._v("1.4. 关闭 JSP 支持")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#15-%E7%A6%81%E6%AD%A2%E6%89%AB%E6%8F%8F-servlet-%E6%B3%A8%E8%A7%A3"}},[t._v("1.5. 禁止扫描 Servlet 注解")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#16-%E9%85%8D%E7%BD%AE-web-fragment-%E6%89%AB%E6%8F%8F"}},[t._v("1.6. 配置 Web-Fragment 扫描")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#17-%E9%9A%8F%E6%9C%BA%E6%95%B0%E7%86%B5%E6%BA%90%E4%BC%98%E5%8C%96"}},[t._v("1.7. 随机数熵源优化")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#18-%E5%B9%B6%E8%A1%8C%E5%90%AF%E5%8A%A8%E5%A4%9A%E4%B8%AA-web-%E5%BA%94%E7%94%A8"}},[t._v("1.8. 并行启动多个 Web 应用")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#2-%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[t._v("2. 参考资料")])])]),t._v(" "),s("h2",{attrs:{id:"_1-tomcat-启动优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-tomcat-启动优化"}},[t._v("#")]),t._v(" 1. Tomcat 启动优化")]),t._v(" "),s("p",[t._v("如果 Tomcat 启动比较慢，可以考虑一些优化点")]),t._v(" "),s("h3",{attrs:{id:"_1-1-清理-tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-清理-tomcat"}},[t._v("#")]),t._v(" 1.1. 清理 Tomcat")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("清理不必要的 Web 应用")]),t._v("：首先我们要做的是删除掉 webapps 文件夹下不需要的工程，一般是 host-manager、example、doc 等这些默认的工程，可能还有以前添加的但现在用不着的工程，最好把这些全都删除掉。")]),t._v(" "),s("li",[s("strong",[t._v("清理 XML 配置文件")]),t._v("：Tomcat 在启动时会解析所有的 XML 配置文件，解析 XML 较为耗时，所以应该尽量保持配置文件的简洁。")]),t._v(" "),s("li",[s("strong",[t._v("清理 JAR 文件")]),t._v("：JVM 的类加载器在加载类时，需要查找每一个 JAR 文件，去找到所需要的类。如果删除了不需要的 JAR 文件，查找的速度就会快一些。这里请注意："),s("strong",[t._v("Web 应用中的 lib 目录下不应该出现 Servlet API 或者 Tomcat 自身的 JAR")]),t._v("，这些 JAR 由 Tomcat 负责提供。")]),t._v(" "),s("li",[s("strong",[t._v("清理其他文件")]),t._v("：及时清理日志，删除 logs 文件夹下不需要的日志文件。同样还有 work 文件夹下的 catalina 文件夹，它其实是 Tomcat 把 JSP 转换为 Class 文件的工作目录。有时候我们也许会遇到修改了代码，重启了 Tomcat，但是仍没效果，这时候便可以删除掉这个文件夹，Tomcat 下次启动的时候会重新生成。")])]),t._v(" "),s("h3",{attrs:{id:"_1-2-禁止-tomcat-tld-扫描"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-禁止-tomcat-tld-扫描"}},[t._v("#")]),t._v(" 1.2. 禁止 Tomcat TLD 扫描")]),t._v(" "),s("p",[t._v("Tomcat 为了支持 JSP，在应用启动的时候会扫描 JAR 包里面的 TLD 文件，加载里面定义的标签库。所以在 Tomcat 的启动日志里，你可能会碰到这种提示：")]),t._v(" "),s("blockquote",[s("p",[t._v("At least one JAR was scanned for TLDs yet contained no TLDs. Enable debug logging for this logger for a complete list of JARs that were scanned but no TLDs were found in them. Skipping unneeded JARs during scanning can improve startup time and JSP compilation time.")])]),t._v(" "),s("p",[t._v("Tomcat 的意思是，我扫描了你 Web 应用下的 JAR 包，发现 JAR 包里没有 TLD 文件。我建议配置一下 Tomcat 不要去扫描这些 JAR 包，这样可以提高 Tomcat 的启动速度，并节省 JSP 编译时间。")]),t._v(" "),s("p",[t._v("如何配置不去扫描这些 JAR 包呢，这里分两种情况：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果你的项目没有使用 JSP 作为 Web 页面模板，而是使用 Velocity 之类的模板引擎，你完全可以把 TLD 扫描禁止掉。方法是，找到 Tomcat 的"),s("code",[t._v("conf/")]),t._v("目录下的"),s("code",[t._v("context.xml")]),t._v("文件，在这个文件里 Context 标签下，加上"),s("strong",[t._v("JarScanner")]),t._v("和"),s("strong",[t._v("JarScanFilter")]),t._v("子标签，像下面这样。")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("JarScanner")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("JarScanFilter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultTldScan")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultpluggabilityScan")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("JarScanner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("如果你的项目使用了 JSP 作为 Web 页面模块，意味着 TLD 扫描无法避免，但是我们可以通过配置来告诉 Tomcat，只扫描那些包含 TLD 文件的 JAR 包。方法是，找到 Tomcat 的"),s("code",[t._v("conf/")]),t._v("目录下的"),s("code",[t._v("catalina.properties")]),t._v("文件，在这个文件里的 jarsToSkip 配置项中，加上你的 JAR 包。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("tomcat.util.scan.StandardJarScanFilter.jarsToSkip=xxx.jar\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"_1-3-关闭-websocket-支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-关闭-websocket-支持"}},[t._v("#")]),t._v(" 1.3. 关闭 WebSocket 支持")]),t._v(" "),s("p",[t._v("Tomcat 会扫描 WebSocket 注解的 API 实现，比如 "),s("code",[t._v("@ServerEndpoint")]),t._v(" 注解的类。如果不需要使用 WebSockets 就可以关闭它。具体方法是，找到 Tomcat 的 "),s("code",[t._v("conf/")]),t._v(" 目录下的 "),s("code",[t._v("context.xml")]),t._v(" 文件，给 "),s("code",[t._v("Context")]),t._v(" 标签加一个 "),s("strong",[s("code",[t._v("containerSciFilter")])]),t._v(" 的属性：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Context")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("containerSciFilter")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.apache.tomcat.websocket.server.WsSci"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n...\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("更进一步，如果你不需要 WebSockets 这个功能，你可以把 Tomcat "),s("code",[t._v("lib")]),t._v(" 目录下的 "),s("code",[t._v("websocket-api.jar")]),t._v(" 和 "),s("code",[t._v("tomcat-websocket.jar")]),t._v(" 这两个 JAR 文件删除掉，进一步提高性能。")]),t._v(" "),s("h3",{attrs:{id:"_1-4-关闭-jsp-支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-关闭-jsp-支持"}},[t._v("#")]),t._v(" 1.4. 关闭 JSP 支持")]),t._v(" "),s("p",[t._v("如果不需要使用 JSP，可以关闭 JSP 功能：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Context")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("containerSciFilter")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.apache.jasper.servlet.JasperInitializer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n...\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("如果要同时关闭 WebSocket 和 Jsp，可以这样配置：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Context")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("containerSciFilter")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.apache.tomcat.websocket.server.WsSci | org.apache.jasper.servlet.JasperInitializer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n...\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"_1-5-禁止扫描-servlet-注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-禁止扫描-servlet-注解"}},[t._v("#")]),t._v(" 1.5. 禁止扫描 Servlet 注解")]),t._v(" "),s("p",[t._v("Servlet 3.0 引入了注解 Servlet，Tomcat 为了支持这个特性，会在 Web 应用启动时扫描你的类文件，因此如果你没有使用 Servlet 注解这个功能，可以告诉 Tomcat 不要去扫描 Servlet 注解。具体配置方法是，在你的 Web 应用的"),s("code",[t._v("web.xml")]),t._v("文件中，设置"),s("code",[t._v("<web-app>")]),t._v("元素的属性"),s("code",[t._v('metadata-complete="true"')]),t._v("，像下面这样。")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("web-app")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("metadata-complete")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("web-app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("code",[t._v("metadata-complete")]),t._v(" 的意思是，"),s("code",[t._v("web.xml")]),t._v(" 里配置的 Servlet 是完整的，不需要再去库类中找 Servlet 的定义。")]),t._v(" "),s("h3",{attrs:{id:"_1-6-配置-web-fragment-扫描"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-配置-web-fragment-扫描"}},[t._v("#")]),t._v(" 1.6. 配置 Web-Fragment 扫描")]),t._v(" "),s("p",[t._v("Servlet 3.0 还引入了“Web 模块部署描述符片段”的 "),s("code",[t._v("web-fragment.xml")]),t._v("，这是一个部署描述文件，可以完成 "),s("code",[t._v("web.xml")]),t._v(" 的配置功能。而这个 "),s("code",[t._v("web-fragment.xml")]),t._v(" 文件必须存放在 JAR 文件的 "),s("code",[t._v("META-INF")]),t._v(" 目录下，而 JAR 包通常放在 "),s("code",[t._v("WEB-INF/lib")]),t._v(" 目录下，因此 Tomcat 需要对 JAR 文件进行扫描才能支持这个功能。")]),t._v(" "),s("p",[t._v("可以通过配置 "),s("code",[t._v("web.xml")]),t._v(" 里面的 "),s("code",[t._v("<absolute-ordering>")]),t._v(" 元素直接指定了哪些 JAR 包需要扫描 "),s("code",[t._v("web fragment")]),t._v("，如果 "),s("code",[t._v("<absolute-ordering/>")]),t._v(" 元素是空的， 则表示不需要扫描，像下面这样。")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("web-app")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("metadata-complete")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n...\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("absolute-ordering")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n...\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("web-app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"_1-7-随机数熵源优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-随机数熵源优化"}},[t._v("#")]),t._v(" 1.7. 随机数熵源优化")]),t._v(" "),s("p",[t._v("Tomcat 7 以上的版本依赖 Java 的 SecureRandom 类来生成随机数，比如 Session ID。而 JVM 默认使用阻塞式熵源（"),s("code",[t._v("/dev/random")]),t._v("）， 在某些情况下就会导致 Tomcat 启动变慢。当阻塞时间较长时， 你会看到这样一条警告日志：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<DATE> org.apache.catalina.util.SessionIdGenerator createSecureRandom\nINFO: Creation of SecureRandom instance for session ID generation using [SHA1PRNG] took [8152] milliseconds.\n")])])]),s("p",[t._v("解决方案是通过设置，让 JVM 使用非阻塞式的熵源。")]),t._v(" "),s("p",[t._v("我们可以设置 JVM 的参数：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-Djava.security.egd=file:/dev/./urandom\n")])])]),s("p",[t._v("或者是设置 "),s("code",[t._v("java.security")]),t._v(" 文件，位于 "),s("code",[t._v("$JAVA_HOME/jre/lib/security")]),t._v(" 目录之下： "),s("code",[t._v("securerandom.source=file:/dev/./urandom")])]),t._v(" "),s("p",[t._v("这里请你注意，"),s("code",[t._v("/dev/./urandom")]),t._v(" 中间有个 "),s("code",[t._v("./")]),t._v(" 的原因是 Oracle JRE 中的 Bug，Java 8 里面的 SecureRandom 类已经修正这个 Bug。 阻塞式的熵源（"),s("code",[t._v("/dev/random")]),t._v("）安全性较高， 非阻塞式的熵源（"),s("code",[t._v("/dev/./urandom")]),t._v("）安全性会低一些，因为如果你对随机数的要求比较高， 可以考虑使用硬件方式生成熵源。")]),t._v(" "),s("h3",{attrs:{id:"_1-8-并行启动多个-web-应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-并行启动多个-web-应用"}},[t._v("#")]),t._v(" 1.8. 并行启动多个 Web 应用")]),t._v(" "),s("p",[t._v("Tomcat 启动的时候，默认情况下 Web 应用都是一个一个启动的，等所有 Web 应用全部启动完成，Tomcat 才算启动完毕。如果在一个 Tomcat 下有多个 Web 应用，为了优化启动速度，你可以配置多个应用程序并行启动，可以通过修改 "),s("code",[t._v("server.xml")]),t._v(" 中 Host 元素的 "),s("code",[t._v("startStopThreads")]),t._v(" 属性来完成。"),s("code",[t._v("startStopThreads")]),t._v(" 的值表示你想用多少个线程来启动你的 Web 应用，如果设成 0 表示你要并行启动 Web 应用，像下面这样的配置。")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Engine")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("startStopThreads")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Host")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("startStopThreads")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        ...\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Engine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("需要注意的是，Engine 元素里也配置了这个参数，这意味着如果你的 Tomcat 配置了多个 Host（虚拟主机），Tomcat 会以并行的方式启动多个 Host。")]),t._v(" "),s("h2",{attrs:{id:"_2-参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-参考资料"}},[t._v("#")]),t._v(" 2. 参考资料")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("官方")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://tomcat.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tomcat 官方网站"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://wiki.apache.org/tomcat/FrontPage",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tomcat Wiki"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://tomee.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tomee 官方网站"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[s("strong",[t._v("教程")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://time.geekbang.org/column/intro/100027701",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入拆解 Tomcat & Jetty"),s("OutboundLink")],1)])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);