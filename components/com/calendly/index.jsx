"use client";

import { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { useSearchParams } from "next/navigation";
import qs from "querystring";
const Calendly = ({ className, ...props }) => {
  const searchParams = useSearchParams();
  const [url, setUrl] = useState(null);
  const [options, setOptions] = useState(null);
  const [mounted, setMounted] = useState(false);

  const calendly_url = searchParams.get("calendly_url");
  const title = searchParams.get("title");

  useEffect(() => {
    if (calendly_url) {
      setUrl(calendly_url);
    }
  }, [calendly_url]);

  useEffect(() => {
    if (props.url && !calendly_url) {
      setUrl(props.url);
    }
  }, [props.url, calendly_url]);
  useEffect(() => {
    if (props.options && url) {
      setOptions(props.options);
    }
  }, [props.options, url]);

  useEffect(() => {
    if (url) {
      setMounted(false);
      let timer = setTimeout(() => {
        setMounted(true);
        clearTimeout(timer);
      }, 400);
    }
  }, [url]);
  useEffect(() => {
    if (options) {
      let url_query = qs.parse(options);
      url_query = { ...url_query, title };
      setUrl(
        (url) =>
          `${url}${
            Object.values(url_query).length > 0
              ? "?" + qs.stringify(url_query)
              : ""
          }`
      );
    }
  }, [options, title]);

  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, [mounted]);

  if (!mounted) return "NO MOUNTED";
  return (
    <Wrapper className={className}>
      <div className="xs:mt-4 sm:mt-4 md:mt-4 lg:mt-2 xl:mt-2 xxl:mt-2">
        <div id="schedule_form">
          {url && (
            <div
              className="calendly-inline-widget rounded-md"
              data-url={`https://calendly.com/${url}`}
              style={{ minWidth: "320px", width: "100%", maxWidth: "520px" }}
            />
          )}
        </div>
        <style jsx>{`
          .calendly-inline-widget {
            height: 750px !important;
          }
        `}</style>
      </div>
    </Wrapper>
  );
};

export default Calendly;
