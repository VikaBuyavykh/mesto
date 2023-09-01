(()=>{"use strict";var t=document.querySelector(".profile__edit-button"),e=document.querySelector(".profile__add-button"),n=document.querySelector(".popup__confirm-button"),r=document.querySelector("#element"),o=Array.from(document.querySelectorAll(".popup__form")),i=document.querySelector(".profile__avatar"),u={errorInputClass:"popup__form-item_type_error",errorSelctor:"popup__error-message_active",inputClass:"popup__form-item",submitButtonClass:"popup__submit-button",inactiveSubmitButtonClass:"popup__submit-button_inactive"};function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}const a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElem=e,this._config=n}var e,n;return e=t,(n=[{key:"_showError",value:function(t){var e=this._formElem.querySelector("#error-".concat(t.id));t.classList.add("".concat(this._config.errorInputClass)),e.textContent=t.validationMessage,e.classList.add("".concat(this._config.errorSelctor))}},{key:"_hideError",value:function(t){var e=this._formElem.querySelector("#error-".concat(t.id));t.classList.remove("".concat(this._config.errorInputClass)),e.textContent="",e.classList.remove("".concat(this._config.errorSelctor))}},{key:"_isValid",value:function(t){t.validity.valid?this._hideError(t):this._showError(t)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add("".concat(this._config.inactiveSubmitButtonClass)),this._buttonElement.setAttribute("disabled",!0)}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove("".concat(this._config.inactiveSubmitButtonClass)),this._buttonElement.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList=Array.from(this._formElem.querySelectorAll(".".concat(this._config.inputClass))),this._buttonElement=this._formElem.querySelector(".".concat(this._config.submitButtonClass)),this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState()}))})),this._formElem.addEventListener("reset",(function(){t._disableSubmitButton()}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}const p=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.append(t)}},{key:"addNewItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}const h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElem=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupElem.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElem.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupElem.addEventListener("click",(function(e){var n=e.target.classList;(n.contains("popup")||n.contains("popup__close-button"))&&t.close()}))}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}const g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imgPopupElem=e._popupElem.querySelector(".popup__img"),e._textPopupElem=e._popupElem.querySelector(".popup__text"),e}return e=u,(n=[{key:"open",value:function(t){this._imgPopupElem.src=t.link,this._imgPopupElem.alt=t.name,this._textPopupElem.textContent=t.name,v(S(u.prototype),"open",this).call(this)}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}const j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.popupSelector,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._handleFormSubmit=r,e._popupFormElem=e._popupElem.querySelector(".popup__form"),e._inputList=e._popupElem.querySelectorAll(".popup__form-item"),e._buttonEl=e._popupElem.querySelector(".popup__submit-button"),e._buttonTextEl=e._buttonEl.textContent,e}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;k(P(u.prototype),"setEventListeners",this).call(this),this._popupFormElem.addEventListener("submit",(function(e){e.preventDefault(),t._buttonEl.textContent="Сохранение...",t._handleFormSubmit(t._getInputValues(),t._buttonEl,t._buttonTextEl)}))}},{key:"close",value:function(){k(P(u.prototype),"close",this).call(this),this._popupFormElem.reset()}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}const I=function(){function t(e){var n=e.userNameSelector,r=e.userInfoSelector,o=e.userAvatarSelector,i=e.userId;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(n),this._userInfo=document.querySelector(r),this._userAvatar=document.querySelector(o),this._userId=i}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._userValues={name:this._userName.textContent,occupation:this._userInfo.textContent},this._userValues}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar,o=t._id;this._userName.textContent=e,this._userInfo.textContent=n,this._userAvatar.style.backgroundImage="url(".concat(r,")"),this._userId=o}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}var R=function(){function t(e,n,r,o,i,u,c){var l=e.name,a=e.link,s=e._id,f=e.likes,p=e.owner;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=l,this.link=a,this.id=s,this._likes=f,this._owner=p,this._template=n,this._handleCardClick=r,this._userData=o,this._confirmPopup=i,this._handleLike=u,this._handleDislike=c}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return this._template.content.querySelector(".element").cloneNode(!0)}},{key:"_setData",value:function(){var t=this;this.newCard.querySelector(".element__text").textContent=this.name;var e=this.newCard.querySelector(".element__img");e.src=this.link,e.alt=this.name,this.likeElem=this.newCard.querySelector(".element__like-button"),this.number=this.newCard.querySelector(".element__number-of-likes"),this._deleteElem=this.newCard.querySelector(".element__delete-button"),this.number.textContent=this._likes.length,this._likes.some((function(e){return e.name===t._userData.name}))&&this.likeElem.classList.add("element__like-button_active"),this._owner.name!==this._userData.name&&this._deleteElem.remove()}},{key:"_handleClickDelete",value:function(){this._confirmPopup.open(),this._confirmPopup.deliverData(this)}},{key:"_handleClickLike",value:function(){this.likeElem.classList.contains("element__like-button_active")?this._handleDislike(this):this._handleLike(this)}},{key:"_handleClickOpen",value:function(){this._handleCardClick(this)}},{key:"_setListeners",value:function(){var t=this;this._deleteElem.addEventListener("click",(function(){t._handleClickDelete()})),this.likeElem.addEventListener("click",(function(){t._handleClickLike()})),this.newCard.querySelector(".element__open-button").addEventListener("click",(function(){t._handleClickOpen()}))}},{key:"getView",value:function(){return this.newCard=this._getTemplate(),this._setData(),this._setListeners(),this.newCard}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const q=R;function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}const D=function(){function t(e){var n=e.url,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._headers=r}var e,n;return e=t,(n=[{key:"_getResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getProfile",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._getResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._getResponse)}},{key:"editProfileInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then(this._getResponse)}},{key:"updateAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then(this._getResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._getResponse)}},{key:"addCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then(this._getResponse)}},{key:"likeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._getResponse)}},{key:"dislikeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._getResponse)}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}function F(t,e){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},F(t,e)}function U(t){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},U(t)}const J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&F(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=U(r);if(o){var n=U(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===V(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.popupSelector,r=t.handleClick;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._handleClick=r,e.confirmButton=e._popupElem.querySelector(".popup__submit-button"),e.buttonTextElem=e.confirmButton.textContent,e}return e=u,(n=[{key:"activateDeletion",value:function(){this.confirmButton.textContent="Сохранение...",this._handleClick(this)}},{key:"deliverData",value:function(t){this.card=t.newCard,this.id=t.id}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var M=new I({userNameSelector:".profile__name",userInfoSelector:".profile__occupation",userAvatarSelector:".profile__avatar",userId:""});function z(t){return new q(t,r,$,Q,tt,G,K).getView()}function $(t){et.open(t)}function G(t){W.likeCard(t.id).then((function(e){t.number.textContent=e.likes.length,t.likeElem.classList.add("element__like-button_active")})).catch(console.error)}function K(t){W.dislikeCard(t.id).then((function(e){t.number.textContent=e.likes.length,t.likeElem.classList.remove("element__like-button_active")})).catch(console.error)}var Q,W=new D({url:"https://mesto.nomoreparties.co/v1/cohort-74/",headers:{authorization:"8ee087a1-574b-4653-9d38-cba130f24935","Content-Type":"application/json"}}),X=new p({renderer:function(t){var e=z(t);X.addItem(e)}},".elements");Promise.all([W.getProfile(),W.getCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],l=!0,a=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);l=!0);}catch(t){a=!0,o=t}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(a)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return H(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];M.setUserInfo(o),Q=o,X.renderItems(i)})).catch(console.error);var Y=new j({popupSelector:".popup_type_edit",handleFormSubmit:function(t,e,n){W.editProfileInfo({name:t.name,about:t.occupation}).then((function(t){M.setUserInfo(t),Y.close()})).catch(console.error).finally((function(){e.textContent=n}))}});t.addEventListener("click",(function(){Y.open(),Y.setInputValues(M.getUserInfo())})),Y.setEventListeners();var Z=new j({popupSelector:".popup_type_add",handleFormSubmit:function(t,e,n){W.addCard({name:t.cardName,link:t.cardLink}).then((function(t){var e=z({name:t.name,link:t.link,_id:t._id,likes:[],owner:t.owner});X.addNewItem(e),Z.close()})).catch(console.error).finally((function(){e.textContent=n}))}});e.addEventListener("click",(function(){Z.open()})),Z.setEventListeners();var tt=new J({popupSelector:".popup_type_delete",handleClick:function(t){W.deleteCard(t.id).then((function(){t.card.remove(),t.card=null,tt.close()})).catch(console.error).finally((function(){t.confirmButton.textContent=t.buttonTextElem}))}});n.addEventListener("click",(function(){tt.activateDeletion()})),tt.setEventListeners();var et=new g(".popup_type_open-image");et.setEventListeners();var nt=new j({popupSelector:".popup_type_renew",handleFormSubmit:function(t,e,n){W.updateAvatar({avatar:t.link}).then((function(t){M.setUserInfo(t),nt.close()})).catch(console.error).finally((function(){e.textContent=n}))}});i.addEventListener("click",(function(){nt.open()})),nt.setEventListeners(),o.forEach((function(t){new a(t,u).enableValidation()}))})();