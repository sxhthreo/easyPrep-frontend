import React from "react";
import "./index.css";

/**
 * 全局底部栏组件
 * @constructor
 */
export default function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="global-footer">
      <div>© {currentYear} EasyPrep面试刷题平台</div>
      <div>
        <a href="https://sxhthreo.github.io" target="_blank">
          Qianzs
        </a>
      </div>
    </div>
  );
}
