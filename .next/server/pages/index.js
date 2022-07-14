(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/leftSection.js":
/*!***********************************!*\
  !*** ./components/leftSection.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LeftSection)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _leftSection_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leftSection.module.css */ "./components/leftSection.module.css");
/* harmony import */ var _leftSection_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_leftSection_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\functionup\\personal\\radon\\components\\leftSection.js";
 // import Image from 'next/image'





const Spacer = ({
  width = 0,
  height = 0
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  style: {
    width,
    height
  }
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 47
}, undefined);

function LeftSection({
  collegeDetails
}) {
  const {
    fullName,
    logoLink: collegeLogo
  } = collegeDetails;
  const [collegeFullName, collegeCity] = (fullName === null || fullName === void 0 ? void 0 : fullName.split(',')) || ['', ''];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().full)} ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().section)} ${(_leftSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().leftSection)}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
      height: '2.5rem'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_leftSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().companyNameContainer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: collegeLogo,
          alt: "logo",
          width: 80 * _utils_constants__WEBPACK_IMPORTED_MODULE_2__.scaleFactor,
          height: 80 * _utils_constants__WEBPACK_IMPORTED_MODULE_2__.scaleFactor
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            marginLeft: `1rem`
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: (_leftSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().collegeName),
            children: collegeFullName.trim()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, this), !!collegeCity && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
            className: (_leftSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().collegeCity),
            children: collegeCity.trim()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 43
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
        height: '4rem'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_leftSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().descHeading),
        children: ["Want to be a part ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 77
        }, this), " of Company?"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
        height: '1.7rem'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/svgs/student.svg",
        alt: "student reading",
        width: 442 * _utils_constants__WEBPACK_IMPORTED_MODULE_2__.scaleFactor,
        height: 419 * _utils_constants__WEBPACK_IMPORTED_MODULE_2__.scaleFactor
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
      height: '.5rem'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
      className: `${(_leftSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().copyrightText)} ${(_leftSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().hideCopyRightText)}`,
      children: ["Powered by ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        style: {
          color: '#FF2231'
        },
        children: "FunctionUp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 111
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/rightSection.js":
/*!************************************!*\
  !*** ./components/rightSection.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RightSection)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _rightSection_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rightSection.module.css */ "./components/rightSection.module.css");
/* harmony import */ var _rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _leftSection_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leftSection.module.css */ "./components/leftSection.module.css");
/* harmony import */ var _leftSection_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_leftSection_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");


var _jsxFileName = "C:\\Users\\DELL\\Desktop\\functionup\\personal\\radon\\components\\rightSection.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import Image from 'next/image'







function maskMail(email) {
  if (typeof email !== 'string') return email;
  const [name, domain] = email.split('@');
  const maskedName = `${name.slice(0, name.length / 2)}${'*'.repeat(name.length / 2)}`;
  return maskedName + (domain ? '@' : '') + (domain || '');
}

const brandNames = [{
  name: 'Practo',
  image: ''
}, {
  name: 'Walmart',
  image: ''
}, {
  name: 'Amazon',
  image: ''
}, {
  name: 'BigBasket',
  image: ''
}, {
  name: 'OYO',
  image: ''
}, {
  name: 'Meesho',
  image: ''
}, {
  name: 'Razorpay',
  image: ''
}, {
  name: 'Netflix',
  image: ''
}, {
  name: 'Twitter',
  image: ''
}];

const Spacer = ({
  width = 0,
  height = 0
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  style: {
    width,
    height
  }
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 58,
  columnNumber: 47
}, undefined); // const AttachFile = () => (
//     <div style={{ display: 'flex' }} >
//         <span style={{color:'red'}} >&#128206;</span>
//         <span>Attach file</span>
//     </div>
// )


function RightSection({
  collegeDetails,
  refreshCollegeDetails
}) {
  const {
    0: internIntention,
    1: setInternIntention
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const {
    0: applyForInternFormValues,
    1: setApplyForInternFormValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  const {
    0: hireForInternFormValues,
    1: setHireForInternFormValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    interests,
    name: collegeName,
    fullName
  } = collegeDetails;
  const renderApplyInternForm = [{
    placeholder: 'Name',
    type: 'text',
    id: 'name',
    handleOnChange
  }, {
    placeholder: 'Email Address',
    type: 'email',
    id: 'email',
    handleOnChange
  }, {
    placeholder: 'WhatsApp No.',
    type: 'number',
    id: 'mobile',
    maxlength: 10,
    handleOnChange
  }, {
    placeholder: 'Resume upload',
    type: 'file',
    id: 'cv',
    handleOnChange: handleOnChangeFile
  }];
  const renderHireInternForm = [{
    placeholder: 'Company Name',
    type: 'text',
    id: 'name',
    handleOnChange
  }, {
    placeholder: 'Location',
    type: 'text',
    id: 'location',
    handleOnChange
  }, {
    placeholder: 'Phone No.',
    type: 'number',
    id: 'mobile',
    maxlength: 10,
    handleOnChange
  }, {
    placeholder: 'Email Address',
    type: 'email',
    id: 'email',
    handleOnChange
  }];
  const formDataToRender = internIntention === 0 ? renderApplyInternForm : renderHireInternForm;
  const setForm = internIntention === 0 ? setApplyForInternFormValues : setHireForInternFormValues;
  const filledForm = internIntention === 0 ? applyForInternFormValues : hireForInternFormValues;

  function getIntroText() {
    if (internIntention === 0) return 'Join as a Software Developer Intern in a top tier company. Register Now.';
    return `Looking to hire interns from ${fullName}? Register Now.`;
  }

  function onClickInternIntention(e) {
    if (e.target.value == undefined || e.target.value === internIntention) return;
    setInternIntention(Number(e.target.value));
  }

  function getSelectedDivClassName() {
    if (internIntention === 0) return `${(_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().selectedToggleBtn)} ${(_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().selectedToggleBtnLeft)}`;
    return `${(_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().selectedToggleBtn)} ${(_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().selectedToggleBtnRight)}`;
  }

  function getInternIntentionClassName(value) {
    const isSelected = internIntention === value;
    if (isSelected) return `${(_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().toggleBtn)} ${(_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().whiteText)}`;
    return (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().toggleBtn);
  }

  function handleOnChange(id, e) {
    setForm(_objectSpread(_objectSpread({}, filledForm), {}, {
      [id]: e.target.value
    }));
  }

  function handleOnChangeFile(id, e) {
    const file = e.target.files[0];
    setApplyForInternFormValues(_objectSpread(_objectSpread({}, applyForInternFormValues), {}, {
      [id]: file,
      cvName: file.name
    }));
  }

  async function submitInternForm() {
    try {
      setIsLoading(true);

      if (Object.keys(filledForm).length < 4 || Object.values(filledForm).filter(item => !item).length) {
        alert('All fields are mandatory');
        return;
      }

      if (internIntention === 1) {
        // TODO: use setTimeout with loader
        alert('your request has been submitted successfully');
        setHireForInternFormValues({});
        return;
      }

      const formData = new FormData();
      Object.keys(applyForInternFormValues).forEach(key => formData.append(key, applyForInternFormValues[key]));
      formData.append('collegeName', collegeName);
      const response = await fetch(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.placementInterestApi, {
        method: 'POST',
        body: formData
      });
      const val = await response.json();
      if (val.status === false) throw '';
      alert('Your request has been submitted successfully. You will be contacted soon');
      setApplyForInternFormValues({});
      refreshCollegeDetails();
    } catch (error) {
      console.log(error, 'post');
    } finally {
      setIsLoading(false);
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().section)} ${(_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().rightSection)}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
      height: '2.5rem'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      onClick: onClickInternIntention,
      className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().internToggleBtnContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: getSelectedDivClassName()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        value: 0,
        className: getInternIntentionClassName(0),
        children: "Apply for internship"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        value: 1,
        className: getInternIntentionClassName(1),
        children: "Hire Software Interns"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
      height: '2.5rem'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }, this), internIntention === 1 && Array.isArray(interests) && !!interests.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().interestContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().interestRow),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().rowItemHeading),
          style: {
            flex: .75
          },
          children: "S. no"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().rowItemHeading),
          style: {
            flex: 1
          },
          children: "Intern Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().rowItemHeading),
          style: {
            flex: 1
          },
          children: "Email Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 25
        }, this)]
      }, 0, true, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 21
      }, this), interests.map((interest, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().interestRow),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            flex: .75,
            fontSize: '.87rem',
            fontWeight: '700'
          },
          children: `${index + 1}. `
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            flex: 1,
            fontSize: '.87rem',
            fontWeight: '700'
          },
          children: interest.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            flex: 1,
            fontSize: '.87rem'
          },
          children: maskMail(interest.email)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 29
        }, this)]
      }, interest._id, true, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 25
      }, this))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
      height: '1.5rem'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().intro_text),
      children: getIntroText()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
      height: '1.5rem'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputContainer),
      children: formDataToRender.map(({
        id,
        type,
        handleOnChange,
        placeholder
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().formElementContainer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: id,
          className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().labelBox),
          style: {
            color: applyForInternFormValues['cvName'] ? 'black' : '#caccdd'
          },
          children: id === 'cv' && (applyForInternFormValues['cvName'] || placeholder)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: e => handleOnChange(id, e) // accept="application/pdf, application/doc"
          ,
          value: filledForm[id === 'cv' ? '' : id] || '' // because file type value is read-only, it is an uncontrolled component 
          ,
          id: id,
          type: type,
          required: true,
          autoComplete: "on",
          className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
          placeholder: placeholder
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 25
        }, this)]
      }, id, true, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
      height: '1.25rem'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      disabled: isLoading,
      className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().applyBtn),
      onClick: submitInternForm,
      children: "Apply Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 13
    }, this), internIntention === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
        height: '4rem'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "More than 200+ Brands trust us"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
        height: '1rem'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/svgs/companies.svg",
        alt: "companies",
        width: 750 * _utils_constants__WEBPACK_IMPORTED_MODULE_3__.scaleFactor,
        height: 40 * _utils_constants__WEBPACK_IMPORTED_MODULE_3__.scaleFactor
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 21
      }, this)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
      height: '2rem'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
      className: `${(_leftSection_module_css__WEBPACK_IMPORTED_MODULE_6___default().copyrightText)} ${(_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().copyrightText)}`,
      children: ["Powered by ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        style: {
          color: '#FF2231'
        },
        children: "FunctionUp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 111
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
      height: '2rem'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 236,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_leftSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/leftSection */ "./components/leftSection.js");
/* harmony import */ var _components_rightSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/rightSection */ "./components/rightSection.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\functionup\\personal\\radon\\pages\\index.js";







function Home() {
  var _window;

  const {
    0: collegeDetails,
    1: setCollegeDetails
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const location =  false ? 0 : {};
  const {
    hostname
  } = location;
  const [a, b, _] = (hostname === null || hostname === void 0 ? void 0 : hostname.split('.')) || [];
  const collegeName =  false ? 0 : 'iitd'; // console.log({ router ,location, hostname , collegeName, a, b, env:process.env.NODE_ENV})

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    async function fetchCollegeDetails() {
      try {
        setIsLoading(true);
        const response = await fetch((0,_utils_constants__WEBPACK_IMPORTED_MODULE_6__.collegeDetailsApi)(collegeName));
        const val = await response.json();
        if (val.status === false) throw val.msg;
        setCollegeDetails(val.data);
      } catch (error) {// console.log({fetchCollegeDetailsError:error})
      } finally {
        setIsLoading(false);
      }
    }

    fetchCollegeDetails();
  }, [collegeName]);

  async function refreshCollegeDetails() {
    try {
      // setIsLoading(true)
      const response = await fetch((0,_utils_constants__WEBPACK_IMPORTED_MODULE_6__.collegeDetailsApi)(collegeName));
      const val = await response.json();
      if (val.status === false) throw val.msg;
      setCollegeDetails(val.data);
    } catch (error) {// console.log({fetchCollegeDetailsError:error})
    } finally {// setIsLoading(false)
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().full)} ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container)}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Function Up Intern"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Intern Form"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().full)} ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main)}`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_leftSection__WEBPACK_IMPORTED_MODULE_2__.default, {
        collegeDetails: collegeDetails
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_rightSection__WEBPACK_IMPORTED_MODULE_3__.default, {
        refreshCollegeDetails: refreshCollegeDetails,
        collegeDetails: collegeDetails
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scaleFactor": () => (/* binding */ scaleFactor),
/* harmony export */   "collegeDetailsApi": () => (/* binding */ collegeDetailsApi),
/* harmony export */   "placementInterestApi": () => (/* binding */ placementInterestApi)
/* harmony export */ });
const scaleFactor = 621 / 900;
const baseUrl = 'http://localhost:3001/functionup';
const collegeDetailsApi = collegeName => `${baseUrl}/collegeDetails?collegeName=${collegeName}`;
const placementInterestApi = `${baseUrl}/interns`;

/***/ }),

/***/ "./components/leftSection.module.css":
/*!*******************************************!*\
  !*** ./components/leftSection.module.css ***!
  \*******************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"leftSection": "leftSection_leftSection__2Swu5",
	"companyNameContainer": "leftSection_companyNameContainer__24qEu",
	"descHeading": "leftSection_descHeading__x8J_D",
	"copyrightText": "leftSection_copyrightText__850tF",
	"collegeName": "leftSection_collegeName__2yQR3",
	"collegeCity": "leftSection_collegeCity__2WSgJ",
	"hideCopyRightText": "leftSection_hideCopyRightText__2zbcT"
};


/***/ }),

/***/ "./components/rightSection.module.css":
/*!********************************************!*\
  !*** ./components/rightSection.module.css ***!
  \********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"rightSection": "rightSection_rightSection__3IF9x",
	"intro_text": "rightSection_intro_text__36uv7",
	"internToggleBtnContainer": "rightSection_internToggleBtnContainer__1dPhD",
	"toggleBtn": "rightSection_toggleBtn__1GBoz",
	"selectedToggleBtn": "rightSection_selectedToggleBtn__3w8kX",
	"selectedToggleBtnRight": "rightSection_selectedToggleBtnRight__3z1vF",
	"selectedToggleBtnLeft": "rightSection_selectedToggleBtnLeft__KyycX",
	"whiteText": "rightSection_whiteText__2NQQO",
	"inputContainer": "rightSection_inputContainer__3vcjf",
	"inputBox": "rightSection_inputBox__1kwWw",
	"formElementContainer": "rightSection_formElementContainer__3ahNU",
	"labelBox": "rightSection_labelBox__399Or",
	"applyBtn": "rightSection_applyBtn__3iRFu",
	"companyContainer": "rightSection_companyContainer__3G1uS",
	"interestContainer": "rightSection_interestContainer__3zW4a",
	"interestRow": "rightSection_interestRow__AG_nt",
	"rowItemHeading": "rightSection_rowItemHeading__3k5yY",
	"copyrightText": "rightSection_copyrightText__uKzF9"
};


/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"full": "Home_full__2oLj5",
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"section": "Home_section__16Giz",
	"loader": "Home_loader__2xJ8c",
	"spin": "Home_spin__dz3Ay",
	"loader_container": "Home_loader_container__1IBu9"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVzSCxPQUFRLCtCQUE4QnRILFdBQVksRUFBOUY7QUFDQSxNQUFNUyxvQkFBb0IsR0FBSSxHQUFFNkcsT0FBUSxVQUF4Qzs7Ozs7Ozs7OztBQ0pQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVuY3Rpb24tdXAtaW50ZXJuLy4vY29tcG9uZW50cy9sZWZ0U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9mdW5jdGlvbi11cC1pbnRlcm4vLi9jb21wb25lbnRzL3JpZ2h0U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9mdW5jdGlvbi11cC1pbnRlcm4vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mdW5jdGlvbi11cC1pbnRlcm4vLi91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vZnVuY3Rpb24tdXAtaW50ZXJuLy4vY29tcG9uZW50cy9sZWZ0U2VjdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL2Z1bmN0aW9uLXVwLWludGVybi8uL2NvbXBvbmVudHMvcmlnaHRTZWN0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnVuY3Rpb24tdXAtaW50ZXJuLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mdW5jdGlvbi11cC1pbnRlcm4vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9mdW5jdGlvbi11cC1pbnRlcm4vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Z1bmN0aW9uLXVwLWludGVybi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnVuY3Rpb24tdXAtaW50ZXJuL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgc2VjdGlvblN0eWxlcyBmcm9tICcuL2xlZnRTZWN0aW9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7c2NhbGVGYWN0b3J9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cydcclxuXHJcbmNvbnN0IFNwYWNlciA9ICh7IHdpZHRoID0gMCwgaGVpZ2h0ID0gMCB9KSA9PiA8ZGl2IHN0eWxlPXt7d2lkdGgsIGhlaWdodH19Lz5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlZnRTZWN0aW9uKHtcclxuICAgIGNvbGxlZ2VEZXRhaWxzXHJcbn0pIHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZnVsbE5hbWUsXHJcbiAgICAgICAgbG9nb0xpbms6Y29sbGVnZUxvZ29cclxuICAgIH0gPSBjb2xsZWdlRGV0YWlsc1xyXG5cclxuICAgIGNvbnN0IFtjb2xsZWdlRnVsbE5hbWUsIGNvbGxlZ2VDaXR5XSA9IGZ1bGxOYW1lPy5zcGxpdCgnLCcpIHx8IFsnJywgJyddXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5mdWxsfSAke3N0eWxlcy5zZWN0aW9ufSAke3NlY3Rpb25TdHlsZXMubGVmdFNlY3Rpb259YH0+XHJcbiAgICAgICAgICAgIDxTcGFjZXIgaGVpZ2h0PXsnMi41cmVtJ30gLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VjdGlvblN0eWxlcy5jb21wYW55TmFtZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbGxlZ2VMb2dvfSBhbHQ9XCJsb2dvXCIgd2lkdGg9ezgwICogc2NhbGVGYWN0b3J9IGhlaWdodD17ODAgKiBzY2FsZUZhY3Rvcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpgMXJlbWAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3NlY3Rpb25TdHlsZXMuY29sbGVnZU5hbWV9Pntjb2xsZWdlRnVsbE5hbWUudHJpbSgpfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshIWNvbGxlZ2VDaXR5ICYmIDxzbWFsbCBjbGFzc05hbWU9e3NlY3Rpb25TdHlsZXMuY29sbGVnZUNpdHl9ID57Y29sbGVnZUNpdHkudHJpbSgpfTwvc21hbGw+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPFNwYWNlciBoZWlnaHQ9eyc0cmVtJ30gLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c2VjdGlvblN0eWxlcy5kZXNjSGVhZGluZ30+V2FudCB0byBiZSBhIHBhcnQgPGJyLz4gb2YgQ29tcGFueT88L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTcGFjZXIgaGVpZ2h0PXsnMS43cmVtJ30gLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3Zncy9zdHVkZW50LnN2Z1wiIGFsdD1cInN0dWRlbnQgcmVhZGluZ1wiIHdpZHRoPXs0NDIgKiBzY2FsZUZhY3Rvcn0gaGVpZ2h0PXs0MTkgKiBzY2FsZUZhY3Rvcn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17Jy41cmVtJ30gLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2Ake3NlY3Rpb25TdHlsZXMuY29weXJpZ2h0VGV4dH0gJHtzZWN0aW9uU3R5bGVzLmhpZGVDb3B5UmlnaHRUZXh0fWB9PlBvd2VyZWQgYnkgPHNwYW4gc3R5bGU9e3tjb2xvcjonI0ZGMjIzMSd9fT5GdW5jdGlvblVwPC9zcGFuPjwvc21hbGw+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuLy8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHNlY3Rpb25TdHlsZXMgZnJvbSAnLi9yaWdodFNlY3Rpb24ubW9kdWxlLmNzcydcclxuaW1wb3J0IGxlZnRTZWN0aW9uU3R5bGVzIGZyb20gJy4vbGVmdFNlY3Rpb24ubW9kdWxlLmNzcydcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7c2NhbGVGYWN0b3IsIHBsYWNlbWVudEludGVyZXN0QXBpfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnXHJcblxyXG5cclxuZnVuY3Rpb24gbWFza01haWwoZW1haWwpIHtcclxuICAgIGlmICh0eXBlb2YgZW1haWwgIT09ICdzdHJpbmcnIClcclxuICAgICAgICByZXR1cm4gZW1haWxcclxuICAgIFxyXG4gICAgY29uc3QgW25hbWUsIGRvbWFpbl0gPSBlbWFpbC5zcGxpdCgnQCcpXHJcbiAgICBjb25zdCBtYXNrZWROYW1lID0gYCR7bmFtZS5zbGljZSgwLCBuYW1lLmxlbmd0aCAvIDIpfSR7JyonLnJlcGVhdChuYW1lLmxlbmd0aCAvIDIpfWBcclxuICAgIHJldHVybiBtYXNrZWROYW1lICsgKGRvbWFpbiA/ICdAJyA6ICcnKSArIChkb21haW4gfHwgJycpXHJcbn1cclxuXHJcbmNvbnN0IGJyYW5kTmFtZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1ByYWN0bycsXHJcbiAgICAgICAgaW1hZ2U6JydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1dhbG1hcnQnLFxyXG4gICAgICAgIGltYWdlOicnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdBbWF6b24nLFxyXG4gICAgICAgIGltYWdlOicnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdCaWdCYXNrZXQnLFxyXG4gICAgICAgIGltYWdlOicnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdPWU8nLFxyXG4gICAgICAgIGltYWdlOicnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdNZWVzaG8nLFxyXG4gICAgICAgIGltYWdlOicnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdSYXpvcnBheScsXHJcbiAgICAgICAgaW1hZ2U6JydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ05ldGZsaXgnLFxyXG4gICAgICAgIGltYWdlOicnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdUd2l0dGVyJyxcclxuICAgICAgICBpbWFnZTonJ1xyXG4gICAgfVxyXG5dXHJcblxyXG5jb25zdCBTcGFjZXIgPSAoeyB3aWR0aCA9IDAsIGhlaWdodCA9IDAgfSkgPT4gPGRpdiBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19IC8+XHJcblxyXG4vLyBjb25zdCBBdHRhY2hGaWxlID0gKCkgPT4gKFxyXG4vLyAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0gPlxyXG4vLyAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6J3JlZCd9fSA+JiMxMjgyMDY7PC9zcGFuPlxyXG4vLyAgICAgICAgIDxzcGFuPkF0dGFjaCBmaWxlPC9zcGFuPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vIClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJpZ2h0U2VjdGlvbih7XHJcbiAgICBjb2xsZWdlRGV0YWlscyxcclxuICAgIHJlZnJlc2hDb2xsZWdlRGV0YWlsc1xyXG59KSB7XHJcbiAgICBjb25zdCBbaW50ZXJuSW50ZW50aW9uLCBzZXRJbnRlcm5JbnRlbnRpb25dID0gdXNlU3RhdGUoMSlcclxuICAgIGNvbnN0IFthcHBseUZvckludGVybkZvcm1WYWx1ZXMsIHNldEFwcGx5Rm9ySW50ZXJuRm9ybVZhbHVlc10gPSB1c2VTdGF0ZSh7fSlcclxuICAgIGNvbnN0IFtoaXJlRm9ySW50ZXJuRm9ybVZhbHVlcywgc2V0SGlyZUZvckludGVybkZvcm1WYWx1ZXNdID0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGludGVyZXN0cyxcclxuICAgICAgICBuYW1lOmNvbGxlZ2VOYW1lLFxyXG4gICAgICAgIGZ1bGxOYW1lXHJcbiAgICB9ID0gY29sbGVnZURldGFpbHNcclxuICAgIFxyXG4gICAgY29uc3QgcmVuZGVyQXBwbHlJbnRlcm5Gb3JtID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6J05hbWUnLFxyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGlkOiAnbmFtZScsXHJcbiAgICAgICAgICAgIGhhbmRsZU9uQ2hhbmdlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnRW1haWwgQWRkcmVzcycsXHJcbiAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXHJcbiAgICAgICAgICAgIGlkOiAnZW1haWwnLFxyXG4gICAgICAgICAgICBoYW5kbGVPbkNoYW5nZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdXaGF0c0FwcCBOby4nLFxyXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgaWQ6J21vYmlsZScsXHJcbiAgICAgICAgICAgIG1heGxlbmd0aDogMTAsXHJcbiAgICAgICAgICAgIGhhbmRsZU9uQ2hhbmdlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1Jlc3VtZSB1cGxvYWQnLFxyXG4gICAgICAgICAgICB0eXBlOiAnZmlsZScsXHJcbiAgICAgICAgICAgIGlkOiAnY3YnLFxyXG4gICAgICAgICAgICBoYW5kbGVPbkNoYW5nZTpoYW5kbGVPbkNoYW5nZUZpbGVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG4gICAgICAgIFxyXG4gICAgY29uc3QgcmVuZGVySGlyZUludGVybkZvcm0gPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjonQ29tcGFueSBOYW1lJyxcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBpZDonbmFtZScsXHJcbiAgICAgICAgICAgIGhhbmRsZU9uQ2hhbmdlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTG9jYXRpb24nLFxyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGlkOiAnbG9jYXRpb24nLFxyXG4gICAgICAgICAgICBoYW5kbGVPbkNoYW5nZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1Bob25lIE5vLicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICBpZDonbW9iaWxlJyxcclxuICAgICAgICAgICAgbWF4bGVuZ3RoOiAxMCxcclxuICAgICAgICAgICAgaGFuZGxlT25DaGFuZ2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdFbWFpbCBBZGRyZXNzJyxcclxuICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcclxuICAgICAgICAgICAgaWQ6ICdlbWFpbCcsXHJcbiAgICAgICAgICAgIGhhbmRsZU9uQ2hhbmdlXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG4gICAgXHJcbiAgICBjb25zdCBmb3JtRGF0YVRvUmVuZGVyID0gaW50ZXJuSW50ZW50aW9uID09PSAwID8gcmVuZGVyQXBwbHlJbnRlcm5Gb3JtIDogcmVuZGVySGlyZUludGVybkZvcm1cclxuICAgIGNvbnN0IHNldEZvcm0gPSBpbnRlcm5JbnRlbnRpb24gPT09IDAgPyBzZXRBcHBseUZvckludGVybkZvcm1WYWx1ZXMgOiBzZXRIaXJlRm9ySW50ZXJuRm9ybVZhbHVlc1xyXG4gICAgY29uc3QgZmlsbGVkRm9ybSA9IGludGVybkludGVudGlvbiA9PT0gMCA/IGFwcGx5Rm9ySW50ZXJuRm9ybVZhbHVlcyA6IGhpcmVGb3JJbnRlcm5Gb3JtVmFsdWVzXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW50cm9UZXh0KCkge1xyXG4gICAgICAgIGlmIChpbnRlcm5JbnRlbnRpb24gPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiAnSm9pbiBhcyBhIFNvZnR3YXJlIERldmVsb3BlciBJbnRlcm4gaW4gYSB0b3AgdGllciBjb21wYW55LiBSZWdpc3RlciBOb3cuJ1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBgTG9va2luZyB0byBoaXJlIGludGVybnMgZnJvbSAke2Z1bGxOYW1lfT8gUmVnaXN0ZXIgTm93LmBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNsaWNrSW50ZXJuSW50ZW50aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT0gdW5kZWZpbmVkIHx8IGUudGFyZ2V0LnZhbHVlID09PSBpbnRlcm5JbnRlbnRpb24pXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldEludGVybkludGVudGlvbihOdW1iZXIoZS50YXJnZXQudmFsdWUpKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNlbGVjdGVkRGl2Q2xhc3NOYW1lKCkge1xyXG4gICAgICAgIGlmIChpbnRlcm5JbnRlbnRpb24gPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBgJHtzZWN0aW9uU3R5bGVzLnNlbGVjdGVkVG9nZ2xlQnRufSAke3NlY3Rpb25TdHlsZXMuc2VsZWN0ZWRUb2dnbGVCdG5MZWZ0fWBcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYCR7c2VjdGlvblN0eWxlcy5zZWxlY3RlZFRvZ2dsZUJ0bn0gJHtzZWN0aW9uU3R5bGVzLnNlbGVjdGVkVG9nZ2xlQnRuUmlnaHR9YFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEludGVybkludGVudGlvbkNsYXNzTmFtZSh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBpbnRlcm5JbnRlbnRpb24gPT09IHZhbHVlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmIChpc1NlbGVjdGVkKVxyXG4gICAgICAgICAgICByZXR1cm4gYCR7c2VjdGlvblN0eWxlcy50b2dnbGVCdG59ICR7c2VjdGlvblN0eWxlcy53aGl0ZVRleHR9YFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBzZWN0aW9uU3R5bGVzLnRvZ2dsZUJ0blxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25DaGFuZ2UoaWQsIGUpIHtcclxuICAgICAgICBzZXRGb3JtKHtcclxuICAgICAgICAgICAgLi4uZmlsbGVkRm9ybSxcclxuICAgICAgICAgICAgW2lkXTplLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25DaGFuZ2VGaWxlKGlkLCBlKSB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0QXBwbHlGb3JJbnRlcm5Gb3JtVmFsdWVzKHtcclxuICAgICAgICAgICAgLi4uYXBwbHlGb3JJbnRlcm5Gb3JtVmFsdWVzLFxyXG4gICAgICAgICAgICBbaWRdOiBmaWxlLFxyXG4gICAgICAgICAgICBjdk5hbWU6ZmlsZS5uYW1lXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzdWJtaXRJbnRlcm5Gb3JtKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKVxyXG5cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZmlsbGVkRm9ybSkubGVuZ3RoIDwgNFxyXG4gICAgICAgICAgICAgICAgfHwgT2JqZWN0LnZhbHVlcyhmaWxsZWRGb3JtKS5maWx0ZXIoaXRlbSA9PiAhaXRlbSkubGVuZ3RoXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0FsbCBmaWVsZHMgYXJlIG1hbmRhdG9yeScpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGludGVybkludGVudGlvbiA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogdXNlIHNldFRpbWVvdXQgd2l0aCBsb2FkZXJcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCd5b3VyIHJlcXVlc3QgaGFzIGJlZW4gc3VibWl0dGVkIHN1Y2Nlc3NmdWxseScpXHJcbiAgICAgICAgICAgICAgICBzZXRIaXJlRm9ySW50ZXJuRm9ybVZhbHVlcyh7fSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYXBwbHlGb3JJbnRlcm5Gb3JtVmFsdWVzKS5mb3JFYWNoKGtleSA9PiBmb3JtRGF0YS5hcHBlbmQoa2V5LCBhcHBseUZvckludGVybkZvcm1WYWx1ZXNba2V5XSkpXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY29sbGVnZU5hbWUnLCBjb2xsZWdlTmFtZSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocGxhY2VtZW50SW50ZXJlc3RBcGksIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgICAgICAgICBpZih2YWwuc3RhdHVzID09PSBmYWxzZSkgXHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnJ1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYWxlcnQoJ1lvdXIgcmVxdWVzdCBoYXMgYmVlbiBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5LiBZb3Ugd2lsbCBiZSBjb250YWN0ZWQgc29vbicpXHJcbiAgICAgICAgICAgIHNldEFwcGx5Rm9ySW50ZXJuRm9ybVZhbHVlcyh7fSlcclxuICAgICAgICAgICAgcmVmcmVzaENvbGxlZ2VEZXRhaWxzKClcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgJ3Bvc3QnKVxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9ufSAke3NlY3Rpb25TdHlsZXMucmlnaHRTZWN0aW9ufWB9PlxyXG4gICAgICAgICAgICB7Lyoge2lzTG9hZGluZyAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0vPn0gKi99XHJcblxyXG4gICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17JzIuNXJlbSd9IC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tJbnRlcm5JbnRlbnRpb259IGNsYXNzTmFtZT17c2VjdGlvblN0eWxlcy5pbnRlcm5Ub2dnbGVCdG5Db250YWluZXJ9ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRTZWxlY3RlZERpdkNsYXNzTmFtZSgpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPXtnZXRJbnRlcm5JbnRlbnRpb25DbGFzc05hbWUoMCl9PkFwcGx5IGZvciBpbnRlcm5zaGlwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHZhbHVlPXsxfSBjbGFzc05hbWU9e2dldEludGVybkludGVudGlvbkNsYXNzTmFtZSgxKX0+SGlyZSBTb2Z0d2FyZSBJbnRlcm5zPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFNwYWNlciBoZWlnaHQ9eycyLjVyZW0nfSAvPlxyXG5cclxuICAgICAgICAgICAge2ludGVybkludGVudGlvbiA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGludGVyZXN0cykgJiYgISFpbnRlcmVzdHMubGVuZ3RoICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzZWN0aW9uU3R5bGVzLmludGVyZXN0Q29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NlY3Rpb25TdHlsZXMuaW50ZXJlc3RSb3d9IGtleT17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c2VjdGlvblN0eWxlcy5yb3dJdGVtSGVhZGluZ30gc3R5bGU9e3tmbGV4Oi43NX19ID5TLiBubzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzZWN0aW9uU3R5bGVzLnJvd0l0ZW1IZWFkaW5nfSBzdHlsZT17e2ZsZXg6MX19PkludGVybiBOYW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3NlY3Rpb25TdHlsZXMucm93SXRlbUhlYWRpbmd9IHN0eWxlPXt7ZmxleDoxIH19PkVtYWlsIEFkZHJlc3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2ludGVyZXN0cy5tYXAoKGludGVyZXN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VjdGlvblN0eWxlcy5pbnRlcmVzdFJvd30ga2V5PXtpbnRlcmVzdC5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbGV4Oi43NSwgZm9udFNpemU6Jy44N3JlbScsIGZvbnRXZWlnaHQ6JzcwMCd9fSA+e2Ake2luZGV4KzF9LiBgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZmxleDoxLCBmb250U2l6ZTonLjg3cmVtJywgZm9udFdlaWdodDonNzAwJ319PntpbnRlcmVzdC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZmxleDoxLCBmb250U2l6ZTonLjg3cmVtJywgfX0+e21hc2tNYWlsKGludGVyZXN0LmVtYWlsKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17JzEuNXJlbSd9IC8+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3NlY3Rpb25TdHlsZXMuaW50cm9fdGV4dH0gPntnZXRJbnRyb1RleHQoKX08L3A+XHJcblxyXG4gICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17JzEuNXJlbSd9IC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VjdGlvblN0eWxlcy5pbnB1dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybURhdGFUb1JlbmRlci5tYXAoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU9uQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZH0gY2xhc3NOYW1lPXtzZWN0aW9uU3R5bGVzLmZvcm1FbGVtZW50Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBodG1sRm9yPXtpZH0gY2xhc3NOYW1lPXtzZWN0aW9uU3R5bGVzLmxhYmVsQm94fSBzdHlsZT17e2NvbG9yOmFwcGx5Rm9ySW50ZXJuRm9ybVZhbHVlc1snY3ZOYW1lJ10/ICdibGFjaycgOiAnI2NhY2NkZCd9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQgPT09ICdjdicgJiYgKGFwcGx5Rm9ySW50ZXJuRm9ybVZhbHVlc1snY3ZOYW1lJ10gfHwgcGxhY2Vob2xkZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCBpZD17aWR9IHR5cGU9e3R5cGV9IHJlcXVpcmVkIGF1dG9Db21wbGV0ZSBjbGFzc05hbWU9e3NlY3Rpb25TdHlsZXMuaW5wdXRCb3h9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlT25DaGFuZ2UoaWQsIGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWNjZXB0PVwiYXBwbGljYXRpb24vcGRmLCBhcHBsaWNhdGlvbi9kb2NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpbGxlZEZvcm1baWQgPT09ICdjdicgPyAnJyA6IGlkXSB8fCAnJ30gLy8gYmVjYXVzZSBmaWxlIHR5cGUgdmFsdWUgaXMgcmVhZC1vbmx5LCBpdCBpcyBhbiB1bmNvbnRyb2xsZWQgY29tcG9uZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9J29uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzZWN0aW9uU3R5bGVzLmlucHV0Qm94fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFNwYWNlciBoZWlnaHQ9eycxLjI1cmVtJ30gLz5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2lzTG9hZGluZ30gY2xhc3NOYW1lPXtzZWN0aW9uU3R5bGVzLmFwcGx5QnRufSBvbkNsaWNrPXtzdWJtaXRJbnRlcm5Gb3JtfSA+QXBwbHkgTm93PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICB7aW50ZXJuSW50ZW50aW9uID09PSAwICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNwYWNlciBoZWlnaHQ9eyc0cmVtJ30gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TW9yZSB0aGFuIDIwMCsgQnJhbmRzIHRydXN0IHVzPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17JzFyZW0nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8SW1hZ2Ugc3JjPVwiL2NvbXBhbnktaW1hZ2UucG5nXCIgYWx0PVwiY29tcGFuaWVzXCIgd2lkdGg9ezcyOX0gaGVpZ2h0PXszMH0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3Zncy9jb21wYW5pZXMuc3ZnXCIgYWx0PVwiY29tcGFuaWVzXCIgd2lkdGg9ezc1MCAqIHNjYWxlRmFjdG9yfSBoZWlnaHQ9ezQwICogc2NhbGVGYWN0b3J9IC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3NlY3Rpb25TdHlsZXMuY29tcGFueUNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YnJhbmROYW1lcy5tYXAoYnJhbmQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2JyYW5kLm5hbWV9ID57YnJhbmQubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17JzJyZW0nfSAvPlxyXG5cclxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17YCR7bGVmdFNlY3Rpb25TdHlsZXMuY29weXJpZ2h0VGV4dH0gJHtzZWN0aW9uU3R5bGVzLmNvcHlyaWdodFRleHR9YH0+UG93ZXJlZCBieSA8c3BhbiBzdHlsZT17e2NvbG9yOicjRkYyMjMxJ319PkZ1bmN0aW9uVXA8L3NwYW4+PC9zbWFsbD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxTcGFjZXIgaGVpZ2h0PXsnMnJlbSd9IC8+XHJcblxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IExlZnRTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbGVmdFNlY3Rpb24nO1xyXG5pbXBvcnQgUmlnaHRTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvcmlnaHRTZWN0aW9uJztcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBjb2xsZWdlRGV0YWlsc0FwaSB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cydcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbY29sbGVnZURldGFpbHMsIHNldENvbGxlZ2VEZXRhaWxzXSA9IHVzZVN0YXRlKHt9KVxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiID8gd2luZG93Py5sb2NhdGlvbiA6IHt9XHJcbiAgY29uc3QgeyBob3N0bmFtZSB9ID0gbG9jYXRpb25cclxuICBjb25zdCBbYSwgYiwgX10gPSAgaG9zdG5hbWU/LnNwbGl0KCcuJykgfHwgW11cclxuICBjb25zdCBjb2xsZWdlTmFtZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/ICAoYSA9PT0gJ3d3dyc/IGIgOiBhKSA6ICdpaXRkJ1xyXG4gIC8vIGNvbnNvbGUubG9nKHsgcm91dGVyICxsb2NhdGlvbiwgaG9zdG5hbWUgLCBjb2xsZWdlTmFtZSwgYSwgYiwgZW52OnByb2Nlc3MuZW52Lk5PREVfRU5WfSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb2xsZWdlRGV0YWlscygpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNvbGxlZ2VEZXRhaWxzQXBpKGNvbGxlZ2VOYW1lKSlcclxuICAgICAgICAgIGNvbnN0IHZhbCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgICAgICAgIGlmICh2YWwuc3RhdHVzID09PSBmYWxzZSlcclxuICAgICAgICAgICAgdGhyb3cgdmFsLm1zZ1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBzZXRDb2xsZWdlRGV0YWlscyh2YWwuZGF0YSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7ZmV0Y2hDb2xsZWdlRGV0YWlsc0Vycm9yOmVycm9yfSlcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmZXRjaENvbGxlZ2VEZXRhaWxzKClcclxuICB9LCBbY29sbGVnZU5hbWVdKVxyXG5cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaENvbGxlZ2VEZXRhaWxzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gc2V0SXNMb2FkaW5nKHRydWUpXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY29sbGVnZURldGFpbHNBcGkoY29sbGVnZU5hbWUpKVxyXG4gICAgICBjb25zdCB2YWwgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICAgIGlmICh2YWwuc3RhdHVzID09PSBmYWxzZSlcclxuICAgICAgICB0aHJvdyB2YWwubXNnXHJcbiAgICAgIFxyXG4gICAgICBzZXRDb2xsZWdlRGV0YWlscyh2YWwuZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coe2ZldGNoQ29sbGVnZURldGFpbHNFcnJvcjplcnJvcn0pXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIC8vIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmZ1bGx9ICR7c3R5bGVzLmNvbnRhaW5lcn1gfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkZ1bmN0aW9uIFVwIEludGVybjwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkludGVybiBGb3JtXCIgLz5cclxuICAgICAgICB7LyogPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPiAqL31cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtgJHtzdHlsZXMuZnVsbH0gJHtzdHlsZXMubWFpbn1gfT5cclxuICAgICAgICA8TGVmdFNlY3Rpb25cclxuICAgICAgICAgIGNvbGxlZ2VEZXRhaWxzPXtjb2xsZWdlRGV0YWlsc31cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8UmlnaHRTZWN0aW9uXHJcbiAgICAgICAgICByZWZyZXNoQ29sbGVnZURldGFpbHM9e3JlZnJlc2hDb2xsZWdlRGV0YWlsc31cclxuICAgICAgICAgIGNvbGxlZ2VEZXRhaWxzPXtjb2xsZWdlRGV0YWlsc31cclxuICAgICAgICAvPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHNjYWxlRmFjdG9yID0gNjIxIC8gOTAwXHJcblxyXG5jb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9mdW5jdGlvbnVwJ1xyXG5leHBvcnQgY29uc3QgY29sbGVnZURldGFpbHNBcGkgPSBjb2xsZWdlTmFtZSA9PiBgJHtiYXNlVXJsfS9jb2xsZWdlRGV0YWlscz9jb2xsZWdlTmFtZT0ke2NvbGxlZ2VOYW1lfWBcclxuZXhwb3J0IGNvbnN0IHBsYWNlbWVudEludGVyZXN0QXBpID0gYCR7YmFzZVVybH0vaW50ZXJuc2BcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGVmdFNlY3Rpb25cIjogXCJsZWZ0U2VjdGlvbl9sZWZ0U2VjdGlvbl9fMlN3dTVcIixcblx0XCJjb21wYW55TmFtZUNvbnRhaW5lclwiOiBcImxlZnRTZWN0aW9uX2NvbXBhbnlOYW1lQ29udGFpbmVyX18yNHFFdVwiLFxuXHRcImRlc2NIZWFkaW5nXCI6IFwibGVmdFNlY3Rpb25fZGVzY0hlYWRpbmdfX3g4Sl9EXCIsXG5cdFwiY29weXJpZ2h0VGV4dFwiOiBcImxlZnRTZWN0aW9uX2NvcHlyaWdodFRleHRfXzg1MHRGXCIsXG5cdFwiY29sbGVnZU5hbWVcIjogXCJsZWZ0U2VjdGlvbl9jb2xsZWdlTmFtZV9fMnlRUjNcIixcblx0XCJjb2xsZWdlQ2l0eVwiOiBcImxlZnRTZWN0aW9uX2NvbGxlZ2VDaXR5X18yV1NnSlwiLFxuXHRcImhpZGVDb3B5UmlnaHRUZXh0XCI6IFwibGVmdFNlY3Rpb25faGlkZUNvcHlSaWdodFRleHRfXzJ6YmNUXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJyaWdodFNlY3Rpb25cIjogXCJyaWdodFNlY3Rpb25fcmlnaHRTZWN0aW9uX18zSUY5eFwiLFxuXHRcImludHJvX3RleHRcIjogXCJyaWdodFNlY3Rpb25faW50cm9fdGV4dF9fMzZ1djdcIixcblx0XCJpbnRlcm5Ub2dnbGVCdG5Db250YWluZXJcIjogXCJyaWdodFNlY3Rpb25faW50ZXJuVG9nZ2xlQnRuQ29udGFpbmVyX18xZFBoRFwiLFxuXHRcInRvZ2dsZUJ0blwiOiBcInJpZ2h0U2VjdGlvbl90b2dnbGVCdG5fXzFHQm96XCIsXG5cdFwic2VsZWN0ZWRUb2dnbGVCdG5cIjogXCJyaWdodFNlY3Rpb25fc2VsZWN0ZWRUb2dnbGVCdG5fXzN3OGtYXCIsXG5cdFwic2VsZWN0ZWRUb2dnbGVCdG5SaWdodFwiOiBcInJpZ2h0U2VjdGlvbl9zZWxlY3RlZFRvZ2dsZUJ0blJpZ2h0X18zejF2RlwiLFxuXHRcInNlbGVjdGVkVG9nZ2xlQnRuTGVmdFwiOiBcInJpZ2h0U2VjdGlvbl9zZWxlY3RlZFRvZ2dsZUJ0bkxlZnRfX0t5eWNYXCIsXG5cdFwid2hpdGVUZXh0XCI6IFwicmlnaHRTZWN0aW9uX3doaXRlVGV4dF9fMk5RUU9cIixcblx0XCJpbnB1dENvbnRhaW5lclwiOiBcInJpZ2h0U2VjdGlvbl9pbnB1dENvbnRhaW5lcl9fM3ZjamZcIixcblx0XCJpbnB1dEJveFwiOiBcInJpZ2h0U2VjdGlvbl9pbnB1dEJveF9fMWt3V3dcIixcblx0XCJmb3JtRWxlbWVudENvbnRhaW5lclwiOiBcInJpZ2h0U2VjdGlvbl9mb3JtRWxlbWVudENvbnRhaW5lcl9fM2FoTlVcIixcblx0XCJsYWJlbEJveFwiOiBcInJpZ2h0U2VjdGlvbl9sYWJlbEJveF9fMzk5T3JcIixcblx0XCJhcHBseUJ0blwiOiBcInJpZ2h0U2VjdGlvbl9hcHBseUJ0bl9fM2lSRnVcIixcblx0XCJjb21wYW55Q29udGFpbmVyXCI6IFwicmlnaHRTZWN0aW9uX2NvbXBhbnlDb250YWluZXJfXzNHMXVTXCIsXG5cdFwiaW50ZXJlc3RDb250YWluZXJcIjogXCJyaWdodFNlY3Rpb25faW50ZXJlc3RDb250YWluZXJfXzN6VzRhXCIsXG5cdFwiaW50ZXJlc3RSb3dcIjogXCJyaWdodFNlY3Rpb25faW50ZXJlc3RSb3dfX0FHX250XCIsXG5cdFwicm93SXRlbUhlYWRpbmdcIjogXCJyaWdodFNlY3Rpb25fcm93SXRlbUhlYWRpbmdfXzNrNXlZXCIsXG5cdFwiY29weXJpZ2h0VGV4dFwiOiBcInJpZ2h0U2VjdGlvbl9jb3B5cmlnaHRUZXh0X191S3pGOVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZnVsbFwiOiBcIkhvbWVfZnVsbF9fMm9MajVcIixcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcInNlY3Rpb25cIjogXCJIb21lX3NlY3Rpb25fXzE2R2l6XCIsXG5cdFwibG9hZGVyXCI6IFwiSG9tZV9sb2FkZXJfXzJ4SjhjXCIsXG5cdFwic3BpblwiOiBcIkhvbWVfc3Bpbl9fZHozQXlcIixcblx0XCJsb2FkZXJfY29udGFpbmVyXCI6IFwiSG9tZV9sb2FkZXJfY29udGFpbmVyX18xSUJ1OVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsInNlY3Rpb25TdHlsZXMiLCJzY2FsZUZhY3RvciIsIlNwYWNlciIsIndpZHRoIiwiaGVpZ2h0IiwiTGVmdFNlY3Rpb24iLCJjb2xsZWdlRGV0YWlscyIsImZ1bGxOYW1lIiwibG9nb0xpbmsiLCJjb2xsZWdlTG9nbyIsImNvbGxlZ2VGdWxsTmFtZSIsImNvbGxlZ2VDaXR5Iiwic3BsaXQiLCJmdWxsIiwic2VjdGlvbiIsImxlZnRTZWN0aW9uIiwiY29tcGFueU5hbWVDb250YWluZXIiLCJtYXJnaW5MZWZ0IiwiY29sbGVnZU5hbWUiLCJ0cmltIiwiZGVzY0hlYWRpbmciLCJjb3B5cmlnaHRUZXh0IiwiaGlkZUNvcHlSaWdodFRleHQiLCJjb2xvciIsImxlZnRTZWN0aW9uU3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwbGFjZW1lbnRJbnRlcmVzdEFwaSIsIm1hc2tNYWlsIiwiZW1haWwiLCJuYW1lIiwiZG9tYWluIiwibWFza2VkTmFtZSIsInNsaWNlIiwibGVuZ3RoIiwicmVwZWF0IiwiYnJhbmROYW1lcyIsImltYWdlIiwiUmlnaHRTZWN0aW9uIiwicmVmcmVzaENvbGxlZ2VEZXRhaWxzIiwiaW50ZXJuSW50ZW50aW9uIiwic2V0SW50ZXJuSW50ZW50aW9uIiwiYXBwbHlGb3JJbnRlcm5Gb3JtVmFsdWVzIiwic2V0QXBwbHlGb3JJbnRlcm5Gb3JtVmFsdWVzIiwiaGlyZUZvckludGVybkZvcm1WYWx1ZXMiLCJzZXRIaXJlRm9ySW50ZXJuRm9ybVZhbHVlcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImludGVyZXN0cyIsInJlbmRlckFwcGx5SW50ZXJuRm9ybSIsInBsYWNlaG9sZGVyIiwidHlwZSIsImlkIiwiaGFuZGxlT25DaGFuZ2UiLCJtYXhsZW5ndGgiLCJoYW5kbGVPbkNoYW5nZUZpbGUiLCJyZW5kZXJIaXJlSW50ZXJuRm9ybSIsImZvcm1EYXRhVG9SZW5kZXIiLCJzZXRGb3JtIiwiZmlsbGVkRm9ybSIsImdldEludHJvVGV4dCIsIm9uQ2xpY2tJbnRlcm5JbnRlbnRpb24iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJOdW1iZXIiLCJnZXRTZWxlY3RlZERpdkNsYXNzTmFtZSIsInNlbGVjdGVkVG9nZ2xlQnRuIiwic2VsZWN0ZWRUb2dnbGVCdG5MZWZ0Iiwic2VsZWN0ZWRUb2dnbGVCdG5SaWdodCIsImdldEludGVybkludGVudGlvbkNsYXNzTmFtZSIsImlzU2VsZWN0ZWQiLCJ0b2dnbGVCdG4iLCJ3aGl0ZVRleHQiLCJmaWxlIiwiZmlsZXMiLCJjdk5hbWUiLCJzdWJtaXRJbnRlcm5Gb3JtIiwiT2JqZWN0Iiwia2V5cyIsInZhbHVlcyIsImZpbHRlciIsIml0ZW0iLCJhbGVydCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwia2V5IiwiYXBwZW5kIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJ2YWwiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmlnaHRTZWN0aW9uIiwiaW50ZXJuVG9nZ2xlQnRuQ29udGFpbmVyIiwiQXJyYXkiLCJpc0FycmF5IiwiaW50ZXJlc3RDb250YWluZXIiLCJpbnRlcmVzdFJvdyIsInJvd0l0ZW1IZWFkaW5nIiwiZmxleCIsIm1hcCIsImludGVyZXN0IiwiaW5kZXgiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJfaWQiLCJpbnRyb190ZXh0IiwiaW5wdXRDb250YWluZXIiLCJmb3JtRWxlbWVudENvbnRhaW5lciIsImxhYmVsQm94IiwiaW5wdXRCb3giLCJhcHBseUJ0biIsInVzZVJvdXRlciIsImNvbGxlZ2VEZXRhaWxzQXBpIiwiSG9tZSIsInNldENvbGxlZ2VEZXRhaWxzIiwicm91dGVyIiwibG9jYXRpb24iLCJ3aW5kb3ciLCJob3N0bmFtZSIsImEiLCJiIiwiXyIsImZldGNoQ29sbGVnZURldGFpbHMiLCJtc2ciLCJkYXRhIiwiY29udGFpbmVyIiwibWFpbiIsImJhc2VVcmwiXSwic291cmNlUm9vdCI6IiJ9