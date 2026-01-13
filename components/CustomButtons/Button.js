import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import makeStyles from "@mui/styles/makeStyles";
import Button from "@mui/material/Button";

import styles from "/styles/jss/nextjs-material-kit-pro/components/buttonStyle.js";

const useStyles = makeStyles(styles);

const DEFAULT_JOTFORM_URL = "https://form.jotform.com/260117031306037";

const RegularButton = React.forwardRef(function RegularButton(props, ref) {
  const {
    href,
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    fileButton,
    className,
    external,
    openInNewWindow,
    windowFeatures,
    popupRoutes,
    onClick,
    ...rest
  } = props;

  const classes = useStyles();
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [classes.fileButton]: fileButton,
    [className]: className
  });

  const url = external ? DEFAULT_JOTFORM_URL : href;

  const looksLikeJotform =
    typeof url === "string" && /(^https?:\/\/)?(www\.)?form\.jotform\.com/i.test(url);

  const popRoutes = popupRoutes || ["/consultation-request"];
  const isPopupRoute =
    typeof url === "string" && popRoutes.some((p) => url === p || url.startsWith(p + "/"));

  const shouldOpenPopup = Boolean(openInNewWindow || looksLikeJotform || isPopupRoute);

  const popupUrl = looksLikeJotform
    ? url
    : isPopupRoute
    ? DEFAULT_JOTFORM_URL
    : openInNewWindow
    ? url
    : null;

  const handleClick = (e) => {
    if (disabled) return;

    const isModified = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;

    if (shouldOpenPopup && popupUrl && !isModified) {
      // Stop any navigation
      e.preventDefault();
      e.stopPropagation();

      const features =
        windowFeatures ||
        "popup=yes,width=900,height=800,scrollbars=yes,resizable=yes,noopener,noreferrer";
      const w = window.open(popupUrl, "jotformWindow", features);

      if (w) {
        try { w.opener = null; } catch {}
      } else {
        // Popup blocked → single fallback to a new tab
        window.open(popupUrl, "_blank", "noopener,noreferrer");
      }
    }

    if (typeof onClick === "function") onClick(e);
  };

  // ⬇️ KEY CHANGE: render as <button> when we plan to open a popup.
  const renderAsAnchor = Boolean(url) && !shouldOpenPopup;

  return (
    <Button
      {...rest}
      ref={ref}
      className={btnClasses}
      disabled={disabled}
      component={renderAsAnchor ? "a" : "button"}
      href={renderAsAnchor ? url : undefined}
      target={renderAsAnchor && external ? "_blank" : undefined}
      rel={renderAsAnchor && external ? "noopener noreferrer" : undefined}
      type={renderAsAnchor ? undefined : "button"}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
});

RegularButton.propTypes = {
  external: PropTypes.bool,
  href: PropTypes.string,
  openInNewWindow: PropTypes.bool,
  windowFeatures: PropTypes.string,
  popupRoutes: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.oneOf([
    "primary","secondary","info","success","warning","danger","rose","white",
    "twitter","facebook","google","linkedin","pinterest","youtube","tumblr",
    "github","behance","dribbble","reddit","instagram","transparent"
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  fileButton: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default RegularButton;