import Link from "next/link";
import React from "react";

function WidgetBlogCategory() {
  return (
    <div className="single-widgets widget_egns_categoris">
      <div className="widget-title">
        <h3>Categories</h3>
      </div>
      <ul className="wp-block-categoris-cloud">
        <li>
          <Link href="/blog">Fashion - 03</Link>
        </li>
        <li>
          <Link href="/blog">Photography - 05</Link>
        </li>
        <li>
          <Link href="/blog">Popular - 04</Link>
        </li>
        <li>
          <Link href="/blog">DSLR Photo - 00</Link>
        </li>
        <li>
          <Link href="/blog">Fashion - 03</Link>
        </li>
        <li>
          <Link href="/blog">Print - 00</Link>
        </li>
      </ul>
    </div>
  );
}

export default WidgetBlogCategory;
