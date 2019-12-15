'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var devfractalUiCore = require('devfractal-ui-core');
var React = _interopDefault(require('react'));
var technoidentityUtils = require('technoidentity-utils');
var devfractalRouter = require('devfractal-router');
var reactRouterDom = require('react-router-dom');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var DropDown = function DropDown(_ref) {
  var _classNamesHelper;

  var label = _ref.label,
      modifier = _ref.modifier,
      rightAligned = _ref.rightAligned,
      dropUp = _ref.dropUp,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "modifier", "rightAligned", "dropUp", "children"]);

  var _React$useState = React.useState(modifier === 'active'),
      active = _React$useState[0],
      setActive = _React$useState[1];

  var classes = devfractalUiCore.classNamesHelper(props, 'dropdown', (_classNamesHelper = {}, _classNamesHelper["is-hoverable"] = modifier === 'hoverable', _classNamesHelper["is-active"] = modifier !== 'hoverable' && active, _classNamesHelper['is-right'] = rightAligned, _classNamesHelper['is-up'] = dropUp, _classNamesHelper));
  return React.createElement(devfractalUiCore.El, Object.assign({}, props, {
    className: classes
  }), React.createElement(devfractalUiCore.El, {
    className: "dropdown-trigger"
  }, React.createElement(devfractalUiCore.Button, {
    onClick: function onClick() {
      return setActive(!active);
    }
  }, React.createElement("span", null, label), React.createElement(devfractalUiCore.Icon, {
    icon: dropUp ? freeSolidSvgIcons.faAngleUp : freeSolidSvgIcons.faAngleDown
  }))), React.createElement(devfractalUiCore.El, {
    className: "dropdown-menu",
    role: "menu"
  }, React.createElement(devfractalUiCore.El, Object.assign({}, props, {
    className: "dropdown-content",
    onClick: function onClick() {
      return setActive(false);
    }
  }), children)));
};
var DropDownItem = function DropDownItem(_ref2) {
  var active = _ref2.active,
      as = _ref2.as,
      children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["active", "as", "children"]);

  var classes = devfractalUiCore.classNamesHelper(props, 'dropdown-item', {
    'is-active': active
  });
  return React.createElement(devfractalUiCore.El, Object.assign({
    as: as
  }, props, {
    className: classes
  }), children);
};
var DropDownDivider = function DropDownDivider(_ref3) {
  var props = _extends({}, _ref3);

  var classes = devfractalUiCore.classNamesHelper(props, 'dropdown-divider');
  return React.createElement(devfractalUiCore.El, Object.assign({
    as: "hr"
  }, props, {
    className: classes
  }));
};

var Pagination = function Pagination(_ref) {
  var _classNamesHelper;

  var rounded = _ref.rounded,
      size = _ref.size,
      alignment = _ref.alignment,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["rounded", "size", "alignment", "children"]);

  var classes = devfractalUiCore.classNamesHelper(props, 'pagination', (_classNamesHelper = {}, _classNamesHelper["is-" + alignment] = alignment, _classNamesHelper["is-" + size] = size, _classNamesHelper['is-rounded'] = rounded, _classNamesHelper));
  return React.createElement(devfractalUiCore.El, Object.assign({
    as: "nav"
  }, props, {
    className: classes,
    role: "navigation",
    "aria-label": "pagination"
  }), children);
};
var PaginationLink = function PaginationLink(_ref2) {
  var current = _ref2.current,
      disabled = _ref2.disabled,
      children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["current", "disabled", "children"]);

  var classes = devfractalUiCore.classNamesHelper(props, 'pagination-link', {
    'is-current': current
  });
  return React.createElement("li", null, React.createElement(devfractalUiCore.El, Object.assign({
    as: "a"
  }, props, {
    disabled: disabled,
    className: classes
  }), children));
};
var PaginationList = function PaginationList(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, ["children"]);

  var classes = devfractalUiCore.classNamesHelper(props, 'pagination-list');
  return React.createElement(devfractalUiCore.El, Object.assign({
    as: "ul"
  }, props, {
    className: classes
  }), children);
};
var PaginationEllipsis = function PaginationEllipsis(_ref4) {
  var props = _extends({}, _ref4);

  var classes = devfractalUiCore.classNamesHelper(props, 'pagination-ellipsis');
  return React.createElement("li", null, React.createElement("span", Object.assign({}, props, {
    className: classes
  }), "\u2026"));
};
var PaginationPrevious = function PaginationPrevious(_ref5) {
  var disabled = _ref5.disabled,
      children = _ref5.children,
      props = _objectWithoutPropertiesLoose(_ref5, ["disabled", "children"]);

  var classes = devfractalUiCore.classNamesHelper(props, 'pagination-previous');
  return React.createElement(devfractalUiCore.El, Object.assign({
    as: "a"
  }, props, {
    disabled: disabled,
    className: classes
  }), children);
};
var PaginationNext = function PaginationNext(_ref6) {
  var children = _ref6.children,
      disabled = _ref6.disabled,
      props = _objectWithoutPropertiesLoose(_ref6, ["children", "disabled"]);

  var classes = devfractalUiCore.classNamesHelper(props, 'pagination-next');
  return React.createElement(devfractalUiCore.El, Object.assign({
    as: "a"
  }, props, {
    disabled: disabled,
    className: classes
  }), children);
};

var TabsItem = function TabsItem(args) {
  var value = args.value,
      _name = args._name,
      _active = args._active,
      _setSelectedTab = args._setSelectedTab,
      children = args.children,
      props = _objectWithoutPropertiesLoose(args, ["value", "_name", "_active", "_setSelectedTab", "children"]);

  return React.createElement(devfractalUiCore.El, Object.assign({
    as: "li"
  }, props, {
    className: devfractalUiCore.classNamesHelper(props, {
      'is-active': _active
    })
  }), React.createElement("a", {
    href: "#!",
    onClick: function onClick() {
      if (_setSelectedTab) {
        _setSelectedTab({
          name: name,
          value: value
        });
      }
    }
  }, children));
};

var TabsView = function TabsView(_ref) {
  var _classNamesHelper;

  var size = _ref.size,
      alignment = _ref.alignment,
      fullWidth = _ref.fullWidth,
      tabsStyle = _ref.tabsStyle,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["size", "alignment", "fullWidth", "tabsStyle", "name", "value", "onChange", "children"]);

  var classes = devfractalUiCore.classNamesHelper(props, 'tabs', (_classNamesHelper = {}, _classNamesHelper["is-" + size] = size, _classNamesHelper["is-" + alignment] = alignment, _classNamesHelper['is-toggle'] = tabsStyle === 'toggle' || tabsStyle === 'toggle-rounded', _classNamesHelper["is-" + tabsStyle] = tabsStyle, _classNamesHelper['is-fullwidth'] = fullWidth, _classNamesHelper));
  var selected = value || children && children && children.props.value || '0';
  return React.createElement(devfractalUiCore.El, Object.assign({}, props, {
    className: classes
  }), React.createElement("ul", null, React.Children.map(children, function (child, i) {
    technoidentityUtils.debug(child.type.displayName === 'TabsItem', "Every child to 'Tabs' must be 'TabsItem'");
    var value = child.props.value || i.toString();
    return React.cloneElement(child, {
      _name: name,
      value: value,
      _active: selected === value,
      _setSelectedTab: function _setSelectedTab(_ref2) {
        var value = _ref2.value;
        return onChange && onChange({
          name: name,
          value: value
        });
      }
    });
  })));
};

var Tabs = function Tabs(props) {
  return React.createElement(devfractalUiCore.Uncontrolled, Object.assign({}, props, {
    component: TabsView
  }));
};

var BreadcrumbItem = function BreadcrumbItem(args) {
  var active = args.active,
      href = args.href,
      children = args.children,
      props = _objectWithoutPropertiesLoose(args, ["active", "href", "children"]);

  var _useRouter = devfractalRouter.useRouter(),
      location = _useRouter.location;

  return React.createElement(devfractalUiCore.El, Object.assign({
    as: "li"
  }, props, {
    className: devfractalUiCore.classNamesHelper(props, {
      'is-active': active || (href && technoidentityUtils.chop(href)) === technoidentityUtils.chop(location.pathname)
    })
  }), React.createElement(reactRouterDom.NavLink, {
    to: href || '#'
  }, children));
};
var Breadcrumb = function Breadcrumb(_ref) {
  var _classNamesHelper;

  var alignment = _ref.alignment,
      size = _ref.size,
      separator = _ref.separator,
      baseURL = _ref.baseURL,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["alignment", "size", "separator", "baseURL", "children"]);

  var classes = devfractalUiCore.classNamesHelper(props, 'breadcrumb', (_classNamesHelper = {}, _classNamesHelper["is-" + alignment] = alignment, _classNamesHelper["is-" + size] = size, _classNamesHelper["has-" + separator + "-separator"] = separator, _classNamesHelper));
  return React.createElement(devfractalUiCore.El, Object.assign({
    as: "nav"
  }, props, {
    className: classes
  }), React.createElement("ul", null, React.Children.map(children, function (child) {
    return React.cloneElement(child, baseURL ? {
      href: technoidentityUtils.chop(baseURL) + "/" + child.props.value
    } : {});
  })));
};

var DynamicBreadcrumb = function DynamicBreadcrumb() {
  var _useRouter = devfractalRouter.useRouter(),
      location = _useRouter.location;

  var segments = technoidentityUtils.chop(location.pathname).split('/');

  if (segments.length <= 1) {
    return React.createElement(devfractalUiCore.Null, null);
  }

  var segmentsPaths = segments.map(function (s, i) {
    return s === '' ? ['home', '/'] : [s, "" + segments.slice(0, i + 1).join('/')];
  });
  return React.createElement(Breadcrumb, null, segmentsPaths.map(function (_ref) {
    var s = _ref[0],
        p = _ref[1];
    return React.createElement(BreadcrumbItem, {
      key: p,
      href: p
    }, technoidentityUtils.capitalizeAll(s, '-'));
  }));
};

var RoutedTabsContext =
/*#__PURE__*/
React.createContext({});

function matches(tab, separator, baseURL, currentLocation) {
  if (!(baseURL && currentLocation && separator)) {
    return false;
  }

  var base = technoidentityUtils.chop(baseURL, separator);
  var current = technoidentityUtils.chop(currentLocation, separator);
  return current.indexOf(base) >= 0 && tab === technoidentityUtils.extractSegment(current, base.length + separator.length, separator);
}

var RoutedTabsItem = function RoutedTabsItem(_ref) {
  var value = _ref.value,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["value", "children"]);

  return React.createElement(RoutedTabsContext.Consumer, null, function (_ref2) {
    var baseURL = _ref2.baseURL,
        separator = _ref2.separator,
        currentLocation = _ref2.currentLocation;
    return React.createElement(devfractalUiCore.El, Object.assign({
      as: "li"
    }, props, {
      className: devfractalUiCore.classNamesHelper(props, {
        'is-active': matches(value, separator, baseURL, currentLocation)
      })
    }), React.createElement(reactRouterDom.NavLink, {
      to: baseURL ? "" + baseURL + separator + value : ''
    }, children));
  });
};
var RoutedTabs = function RoutedTabs(args) {
  var _classNamesHelper;

  var to = args.to,
      _args$urlSeparator = args.urlSeparator,
      urlSeparator = _args$urlSeparator === void 0 ? '/' : _args$urlSeparator,
      size = args.size,
      alignment = args.alignment,
      fullWidth = args.fullWidth,
      tabsStyle = args.tabsStyle,
      children = args.children,
      props = _objectWithoutPropertiesLoose(args, ["to", "urlSeparator", "size", "alignment", "fullWidth", "tabsStyle", "children"]);

  var classes = devfractalUiCore.classNamesHelper(props, 'tabs', (_classNamesHelper = {}, _classNamesHelper["is-" + size] = size, _classNamesHelper["is-" + alignment] = alignment, _classNamesHelper["is-" + tabsStyle] = tabsStyle, _classNamesHelper['is-fullwidth'] = fullWidth, _classNamesHelper));

  var _useRouter = devfractalRouter.useRouter(),
      location = _useRouter.location;

  return React.createElement(RoutedTabsContext.Provider, {
    value: {
      baseURL: to,
      separator: urlSeparator,
      currentLocation: location.pathname
    }
  }, React.createElement(devfractalUiCore.El, Object.assign({}, props, {
    className: classes
  }), React.createElement("ul", null, children)));
};

function dynamicRouter(components, baseUrl) {
  // tslint:disable-next-line: ban-ts-ignore
  // @ts-ignore
  var __esModule = components.__esModule,
      cs = _objectWithoutPropertiesLoose(components, ["__esModule"]);

  var keys = Object.keys(cs);
  var urls = keys.map(function (k) {
    return technoidentityUtils.toLower(k, '-');
  });
  var labels = keys.map(function (k) {
    return technoidentityUtils.capitalizeAll(technoidentityUtils.toLower(k, ' '));
  });

  var Routes = function Routes() {
    return React.createElement(React.Fragment, null, urls.length > 0 && React.createElement(devfractalRouter.SimpleRedirect, {
      exact: true,
      from: baseUrl,
      to: baseUrl + "/" + urls[0]
    }), urls.map(function (url, i) {
      var path = baseUrl + "/" + url;
      return React.createElement(devfractalRouter.Route, {
        exact: true,
        key: url,
        path: path,
        component: cs[keys[i]]
      });
    }));
  };

  var Links = function Links() {
    return React.createElement(RoutedTabs, {
      to: "" + baseUrl,
      size: "medium"
    }, urls.map(function (url, i) {
      return React.createElement(RoutedTabsItem, {
        key: url,
        value: url
      }, labels[i]);
    }));
  };

  return {
    Links: Links,
    Routes: Routes
  };
}

var Menu = function Menu(_ref) {
  var _classNamesHelper;

  var size = _ref.size,
      baseURL = _ref.baseURL,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["size", "baseURL", "children"]);

  var classes = devfractalUiCore.classNamesHelper(props, 'menu', (_classNamesHelper = {}, _classNamesHelper["is-" + size] = size, _classNamesHelper));
  return React.createElement(devfractalUiCore.El, Object.assign({
    as: "aside"
  }, props, {
    className: classes
  }), React.createElement("ul", null, React.Children.map(children, function (child) {
    return React.cloneElement(child, baseURL ? {
      href: technoidentityUtils.chop(baseURL) + "/" + child.props.value
    } : {});
  })));
};
var MenuLabel = function MenuLabel(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  var classes = devfractalUiCore.classNamesHelper(props, 'menu-label');
  return React.createElement(devfractalUiCore.El, Object.assign({
    as: "p"
  }, props, {
    className: classes
  }), children);
};
var MenuList = function MenuList(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, ["children"]);

  var classes = devfractalUiCore.classNamesHelper(props, 'menu-list');
  return React.createElement(devfractalUiCore.El, Object.assign({
    as: "ul"
  }, props, {
    className: classes
  }), children);
};
var MenuItem = function MenuItem(_ref4) {
  var href = _ref4.href,
      active = _ref4.active,
      children = _ref4.children,
      props = _objectWithoutPropertiesLoose(_ref4, ["href", "active", "children"]);

  var _useRouter = devfractalRouter.useRouter(),
      location = _useRouter.location;

  var classes = devfractalUiCore.classNamesHelper(props, {
    'is-active': active || href && technoidentityUtils.chop(location.pathname).startsWith(technoidentityUtils.chop(href))
  });
  return React.createElement(devfractalUiCore.El, Object.assign({
    as: "li"
  }, props), React.createElement(reactRouterDom.Link, {
    to: href || '#',
    className: classes
  }, children));
};

exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbItem = BreadcrumbItem;
exports.DropDown = DropDown;
exports.DropDownDivider = DropDownDivider;
exports.DropDownItem = DropDownItem;
exports.DynamicBreadcrumb = DynamicBreadcrumb;
exports.Menu = Menu;
exports.MenuItem = MenuItem;
exports.MenuLabel = MenuLabel;
exports.MenuList = MenuList;
exports.Pagination = Pagination;
exports.PaginationEllipsis = PaginationEllipsis;
exports.PaginationLink = PaginationLink;
exports.PaginationList = PaginationList;
exports.PaginationNext = PaginationNext;
exports.PaginationPrevious = PaginationPrevious;
exports.RoutedTabs = RoutedTabs;
exports.RoutedTabsItem = RoutedTabsItem;
exports.Tabs = Tabs;
exports.TabsItem = TabsItem;
exports.dynamicRouter = dynamicRouter;
//# sourceMappingURL=devfractal-ui.cjs.development.js.map
