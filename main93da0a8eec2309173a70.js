(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{h:()=>X,w:()=>nt});var e=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button"),r=document.querySelector("#element"),o=Array.from(document.querySelectorAll(".popup__form")),i=document.querySelector(".profile__avatar"),u=document.querySelector(".profile__name"),c=document.querySelector(".profile__occupation"),l={errorInputClass:"popup__form-item_type_error",errorSelctor:"popup__error-message_active",inputClass:"popup__form-item",submitButtonClass:"popup__submit-button",inactiveSubmitButtonClass:"popup__submit-button_inactive"};function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}const f=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElem=e,this._config=n}var e,n;return e=t,(n=[{key:"_showError",value:function(t){var e=this._formElem.querySelector("#error-".concat(t.id));t.classList.add("".concat(this._config.errorInputClass)),e.textContent=t.validationMessage,e.classList.add("".concat(this._config.errorSelctor))}},{key:"_hideError",value:function(t){var e=this._formElem.querySelector("#error-".concat(t.id));t.classList.remove("".concat(this._config.errorInputClass)),e.textContent="",e.classList.remove("".concat(this._config.errorSelctor))}},{key:"_isValid",value:function(t){t.validity.valid?this._hideError(t):this._showError(t)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add("".concat(this._config.inactiveSubmitButtonClass)),this._buttonElement.setAttribute("disabled",!0)}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove("".concat(this._config.inactiveSubmitButtonClass)),this._buttonElement.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList=Array.from(this._formElem.querySelectorAll(".".concat(this._config.inputClass))),this._buttonElement=this._formElem.querySelector(".".concat(this._config.submitButtonClass)),this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState()}))})),this._formElem.addEventListener("reset",(function(){t._disableSubmitButton()}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}const m=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.append(t)}},{key:"addNewItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}const d=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElem=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupElem.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElem.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupElem.addEventListener("click",(function(e){var n=e.target.classList;(n.contains("popup")||n.contains("popup__close-button"))&&t.close()}))}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},S.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}const E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(r);if(o){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imgPopupElem=document.querySelector(".popup__img"),e._textPopupElem=document.querySelector(".popup__text"),e}return e=u,(n=[{key:"open",value:function(t,e){this._imgPopupElem.src=e,this._imgPopupElem.alt=t,this._textPopupElem.textContent=t,S(w(u.prototype),"open",this).call(this)}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},O.apply(this,arguments)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}const L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.popupSelector,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._handleFormSubmit=r,e._popupFormElem=e._popupElem.querySelector(".popup__form"),e._inputList=e._popupElem.querySelectorAll(".popup__form-item"),e._buttonEl=e._popupElem.querySelector(".popup__submit-button"),e._buttonTextEl=e._buttonEl.textContent,e}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;O(j(u.prototype),"setEventListeners",this).call(this),this._popupFormElem.addEventListener("submit",(function(e){e.preventDefault(),t._buttonEl.textContent="Сохранение...",t._handleFormSubmit(t._getInputValues(),t._buttonEl,t._buttonTextEl)}))}},{key:"close",value:function(){O(j(u.prototype),"close",this).call(this),this._popupFormElem.reset()}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}const R=function(){function t(e){var n=e.userNameSelector,r=e.userInfoSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(n),this._userInfo=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._userValues={name:this._userName.textContent,occupation:this._userInfo.textContent},this._userValues}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userInfo.textContent=t.about}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}var B=function(){function t(e,n,r,o){var i=e.name,u=e.link,c=e._id,l=e.likes,a=e.owner;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=i,this._link=u,this._id=c,this._likes=l,this._owner=a,this._template=n,this._handleCardClick=r,this._userData=o}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return this._template.content.querySelector(".element").cloneNode(!0)}},{key:"_setData",value:function(){var t=this;this._newCard.querySelector(".element__text").textContent=this._name;var e=this._newCard.querySelector(".element__img");e.src=this._link,e.alt=this._name,this._likeElem=this._newCard.querySelector(".element__like-button"),this._number=this._newCard.querySelector(".element__number-of-likes"),this._deleteElem=this._newCard.querySelector(".element__delete-button"),this._number.textContent=this._likes.length,this._likes.some((function(e){return e.name===t._userData.name}))&&this._likeElem.classList.add("element__like-button_active"),this._owner.name!==this._userData.name&&this._deleteElem.remove()}},{key:"_handleClickDelete",value:function(){nt.open(),nt.setEventListeners(this._newCard,this._id)}},{key:"_handleClickLike",value:function(){var t=this;this._likeElem.classList.contains("element__like-button_active")?X.dislikeCard(this._id).then((function(e){t._likeElem.classList.remove("element__like-button_active"),t._number.textContent=e.likes.length})):X.likeCard(this._id).then((function(e){t._likeElem.classList.add("element__like-button_active"),t._number.textContent=e.likes.length}))}},{key:"_handleClickOpen",value:function(){this._handleCardClick(this._name,this._link)}},{key:"_setListeners",value:function(){var t=this;this._deleteElem.addEventListener("click",(function(){t._handleClickDelete()})),this._likeElem.addEventListener("click",(function(e){t._handleClickLike(e)})),this._newCard.querySelector(".element__open-button").addEventListener("click",(function(){t._handleClickOpen()}))}},{key:"getView",value:function(){return this._newCard=this._getTemplate(),this._setData(),this._setListeners(),this._newCard}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const A=B;function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}const N=function(){function t(e){var n=e.url,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._headers=r}var e,n;return e=t,(n=[{key:"_getResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getProfile",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._getResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._getResponse)}},{key:"editProfileInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then(this._getResponse)}},{key:"updateAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then(this._getResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._getResponse)}},{key:"addCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then(this._getResponse)}},{key:"likeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._getResponse)}},{key:"dislikeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._getResponse)}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}function J(){return J="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=M(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},J.apply(this,arguments)}function H(t,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},H(t,e)}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},M(t)}const z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&H(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=M(r);if(o){var n=M(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===F(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.popupSelector,r=t.handleClick;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._handleClick=r,e._confirmButton=e._popupElem.querySelector(".popup__submit-button"),e._buttonTextElem=e._confirmButton.textContent,e}return e=u,(n=[{key:"setEventListeners",value:function(t,e){var n=this;J(M(u.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(){n._confirmButton.textContent="Сохранение...",n._handleClick(t,e,n._confirmButton,n._buttonTextElem)}))}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function G(t){return new A(t,r,K,W).getView()}function K(t,e){rt.open(t,e)}function Q(t){i.style.backgroundImage="url('".concat(t.avatar,"')")}var W,X=new N({url:"https://mesto.nomoreparties.co/v1/cohort-74/",headers:{authorization:"8ee087a1-574b-4653-9d38-cba130f24935","Content-Type":"application/json"}}),Y=new m({renderer:function(t){var e=G(t);Y.addItem(e)}},".elements");Promise.all([X.getProfile(),X.getCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],l=!0,a=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);l=!0);}catch(t){a=!0,o=t}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(a)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];u.textContent=o.name,c.textContent=o.about,Q(o),W=o,Y.renderItems(i)}));var Z=new R({userNameSelector:".profile__name",userInfoSelector:".profile__occupation"}),tt=new L({popupSelector:".popup_type_edit",handleFormSubmit:function(t,e,n){X.editProfileInfo({name:t.name,about:t.occupation}).then((function(t){Z.setUserInfo(t),tt.close()})).finally((function(){e.textContent=n}))}});e.addEventListener("click",(function(){tt.open(),tt.setInputValues(Z.getUserInfo())})),tt.setEventListeners();var et=new L({popupSelector:".popup_type_add",handleFormSubmit:function(t,e,n){X.addCard({name:t.cardName,link:t.cardLink}).then((function(t){var e=G({name:t.name,link:t.link,_id:t._id,likes:[],owner:t.owner});Y.addNewItem(e),et.close()})).finally((function(){e.textContent=n}))}});n.addEventListener("click",(function(){et.open()})),et.setEventListeners();var nt=new z({popupSelector:".popup_type_delete",handleClick:function(t,e,n,r){X.deleteCard(e).then((function(){t.remove(),t=null,nt.close()})).finally((function(){n.textContent=r}))}}),rt=new E(".popup_type_open-image");rt.setEventListeners();var ot=new L({popupSelector:".popup_type_renew",handleFormSubmit:function(t,e,n){X.updateAvatar({avatar:t.link}).then((function(t){Q(t),ot.close()})).finally((function(){e.textContent=n}))}});i.addEventListener("click",(function(){ot.open(),ot.setEventListeners()})),o.forEach((function(t){new f(t,l).enableValidation()}))})();