import Link from "next/link";
import React from "react";

function Widgettag() {
  return (
    <div className="single-widgets widget_egns_tag">
      <div className="widget-title">
        <h3>Photography Tags</h3>
      </div>
      <p className="wp-block-tag-cloud">
        <Link href="/blog">Art</Link>,<Link href="/blog">Photo</Link>,
        <Link href="/blog">Business Photo</Link>,
        <Link href="/blog">Design DIY Personal Photo</Link>,
        <Link href="/blog">Lifestyle</Link>,<Link href="/blog">Music</Link>,
        <Link href="/blog">Press Photo Graphy</Link>.
      </p>
    </div>
  );
}

export default Widgettag;
