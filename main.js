(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+arX":
/*!***************************************************************!*\
  !*** ./src/app/MyComponents/edit-todo/edit-todo.component.ts ***!
  \***************************************************************/
/*! exports provided: EditTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTodoComponent", function() { return EditTodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function EditTodoComponent_li_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const log_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](log_r1);
} }
class EditTodoComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        const taskId = this.route.snapshot.paramMap.get('id');
        this.todo = this.getTodoById(taskId);
    }
    onSubmit() {
        this.updateTodo();
        this.router.navigate(['/todos']);
    }
    getTodoById(id) {
        const todosString = localStorage.getItem('todos');
        if (!todosString) {
            console.error('No todos found in local storage.');
            return null;
        }
        const todos = JSON.parse(todosString);
        const todo = todos.find(t => t.id === Number(id));
        if (!todo) {
            console.error('Todo with ID not found.');
            return null;
        }
        return todo;
    }
    updateTodo() {
        this.todo.history.push(`Task updated on ${new Date().toLocaleString()}`);
        const todosString = localStorage.getItem('todos');
        if (!todosString) {
            console.error('No todos found in local storage.');
            return;
        }
        const todos = JSON.parse(todosString);
        const index = todos.findIndex(t => t.id === this.todo.id);
        if (index === -1) {
            console.error('Todo with ID not found.');
            return;
        }
        todos[index] = this.todo;
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log('Updated Todo:', this.todo);
    }
}
EditTodoComponent.ɵfac = function EditTodoComponent_Factory(t) { return new (t || EditTodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
EditTodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditTodoComponent, selectors: [["app-edit-todo"]], decls: 43, vars: 6, consts: [[1, "container"], [1, "cform", 3, "ngSubmit"], [1, "my-3"], ["for", "title", 1, "form-label"], ["type", "text", "name", "title", "id", "title", "aria-describedby", "emailHelp", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "mb-3"], ["for", "desc", 1, "form-label"], ["type", "text", "name", "desc", "id", "desc", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "taskDate", 1, "form-label"], ["type", "date", "name", "taskDate", "id", "taskDate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "priority", 1, "form-label"], ["name", "priority", "id", "priority", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "high"], ["value", "medium"], ["value", "low"], ["for", "status", 1, "form-label"], ["name", "status", "id", "status", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "to-do"], ["value", "in-progress"], ["value", "completed"], [4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary"]], template: function EditTodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditTodoComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Task-Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTodoComponent_Template_input_ngModelChange_7_listener($event) { return ctx.todo.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Task Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTodoComponent_Template_input_ngModelChange_11_listener($event) { return ctx.todo.desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Task Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTodoComponent_Template_input_ngModelChange_15_listener($event) { return ctx.todo.taskDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTodoComponent_Template_select_ngModelChange_19_listener($event) { return ctx.todo.priority = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "High");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTodoComponent_Template_select_ngModelChange_29_listener($event) { return ctx.todo.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "To-Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "In-Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "History Log");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, EditTodoComponent_li_40_Template, 2, 1, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Update Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.todo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.todo.desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.todo.taskDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.todo.priority);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.todo.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todo.history);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXRvZG8uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Typescrpt\angular\final\Tdo\src\main.ts */"zUnb");


/***/ }),

/***/ "2s5v":
/*!*******************************************************!*\
  !*** ./src/app/MyComponents/todos/todos.component.ts ***!
  \*******************************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Todo */ "UqFQ");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! papaparse */ "NpuA");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-todo/add-todo.component */ "3siR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function TodosComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
function TodosComponent_tbody_54_tr_1_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const log_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](log_r8);
} }
const _c0 = function (a0) { return { "strike": a0 }; };
const _c1 = function (a0, a1, a2, a3) { return { "strike": a0, "priority-high": a1, "priority-medium": a2, "priority-low": a3 }; };
function TodosComponent_tbody_54_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodosComponent_tbody_54_tr_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const todo_r5 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.editTask(todo_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodosComponent_tbody_54_tr_1_Template_input_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const todo_r5 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.toggleTodo(todo_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodosComponent_tbody_54_tr_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const todo_r5 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.deleteTodo(todo_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, TodosComponent_tbody_54_tr_1_li_24_Template, 2, 1, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, !todo_r5.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](todo_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c0, !todo_r5.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](todo_r5.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c0, !todo_r5.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](todo_r5.taskDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](19, _c1, !todo_r5.active, todo_r5.priority === "high", todo_r5.priority === "medium", todo_r5.priority === "low"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](todo_r5.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](24, _c0, !todo_r5.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](todo_r5.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "todo", i_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("for", "todo", i_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", todo_r5.history);
} }
function TodosComponent_tbody_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TodosComponent_tbody_54_tr_1_Template, 25, 26, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.filteredTodos);
} }
function TodosComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Finally, there are no pending tasks!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class TodosComponent {
    constructor(router) {
        this.router = router;
        this.errorMessage = '';
        this.statusFilter = '';
        this.priorityFilter = '';
        this.sortType = 'asc'; // Default sorting type is ascending
        this.nextId = 1; // To keep track of the next ID for new todo objects
        this.localItem = localStorage.getItem('todos');
        if (this.localItem == null) {
            this.todos = [];
        }
        else {
            this.todos = JSON.parse(this.localItem);
        }
    }
    ngOnInit() { }
    deleteTodo(todo) {
        const index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    addTodo(todo) {
        // Check if any field is empty
        if (!todo.title || !todo.desc || !todo.taskDate || !todo.priority || !todo.status) {
            this.errorMessage = 'All fields are required.';
            return;
        }
        // Reset the error message
        this.errorMessage = '';
        // Rest of the code remains the same
        const newTodo = new _Todo__WEBPACK_IMPORTED_MODULE_0__["Todo"](); // Create a new Todo instance with the history log
        newTodo.id = this.nextId++;
        newTodo.title = todo.title;
        newTodo.desc = todo.desc;
        newTodo.active = todo.active;
        newTodo.taskDate = todo.taskDate;
        newTodo.priority = todo.priority;
        newTodo.status = todo.status;
        newTodo.history.push(`Task created on ${new Date().toLocaleString()}`); // Add task creation log
        this.todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    toggleTodo(todo) {
        const index = this.todos.indexOf(todo);
        this.todos[index].active = !this.todos[index].active;
        const log = `Status changed to ${this.todos[index].active ? 'active' : 'inactive'} on ${new Date().toLocaleString()}`;
        this.todos[index].history.push(log);
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    // Toggle the sorting type between ascending and descending
    toggleSortType() {
        this.sortType = this.sortType === 'asc' ? 'desc' : 'asc';
    }
    // Filter and Sort the todos based on status, priority, and date
    get filteredTodos() {
        let filteredTodos = this.todos;
        if (this.statusFilter) {
            filteredTodos = filteredTodos.filter(todo => todo.status === this.statusFilter);
        }
        if (this.priorityFilter) {
            filteredTodos = filteredTodos.filter(todo => todo.priority === this.priorityFilter);
        }
        // Sort the todos by taskDate based on the sortType
        filteredTodos.sort((a, b) => {
            if (this.sortType === 'asc') {
                return new Date(a.taskDate).getTime() - new Date(b.taskDate).getTime();
            }
            else {
                return new Date(b.taskDate).getTime() - new Date(a.taskDate).getTime();
            }
        });
        return filteredTodos;
    }
    getPriorityClass(priority) {
        if (priority === 'high') {
            return 'priority-high';
        }
        else if (priority === 'medium') {
            return 'priority-medium';
        }
        else if (priority === 'low') {
            return 'priority-low';
        }
        else {
            return '';
        }
    }
    // getPriorityColor(priority: string): string {
    //   switch (priority) {
    //     case 'high':
    //       return 'red';
    //     case 'medium':
    //       return 'yellow';
    //     case 'low':
    //       return 'green';
    //     default:
    //       return '';
    //   }
    // }
    exportToCSV() {
        const csvData = papaparse__WEBPACK_IMPORTED_MODULE_1__["unparse"](this.filteredTodos, {
            header: true,
        });
        // Create a Blob object and set the type to 'text/csv'
        const blob = new Blob([csvData], { type: 'text/csv' });
        // Create a download link for the Blob
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'todos.csv';
        document.body.appendChild(a);
        a.click();
        // Cleanup: Revoke the URL and remove the link
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }
    // Function to navigate to the edit-todo component
    editTask(todo) {
        // Check if the todo object is valid and has the 'id' property
        if (!todo || typeof todo.id === 'undefined') {
            console.error('Invalid todo object or todo ID is missing.');
            return;
        }
        // Navigate to the edit-todo component with the todo ID as a parameter
        this.router.navigate(['/edit-todo', todo.id]);
        // Add history entry for edit task
        todo.history.push(`Task edited on ${new Date().toLocaleString()}`);
    }
}
TodosComponent.ɵfac = function TodosComponent_Factory(t) { return new (t || TodosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TodosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TodosComponent, selectors: [["app-todos"]], decls: 61, vars: 6, consts: [[1, "container"], ["class", "alert alert-danger", 4, "ngIf"], [1, "text-center", "mb-3"], [3, "todoAdd"], [1, "todo"], [1, "row", "mb-3"], [1, "col-md-4"], ["for", "statusFilter", 1, "form-label"], ["id", "statusFilter", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", ""], ["value", "to-do"], ["value", "in-progress"], ["value", "completed"], ["for", "priorityFilter", 1, "form-label"], ["id", "priorityFilter", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "high"], ["value", "medium"], ["value", "low"], ["for", "sortType", 1, "form-label"], ["id", "sortType", 1, "form-select", 3, "ngModel", "ngModelChange", "change"], ["value", "asc"], ["value", "desc"], [1, "table", 2, "background-color", "transparent"], [4, "ngIf", "ngIfElse"], [1, "row"], [1, "col-md-12"], [1, "btn", "btn-primary", 3, "click"], ["noTodosBlock", ""], [1, "alert", "alert-danger"], [4, "ngFor", "ngForOf"], [1, "wrap-cell", 3, "ngClass"], [3, "ngClass"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "id", "click"], [1, "form-check-label", 3, "for"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function TodosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TodosComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Streamline Your Tasks!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "app-add-todo", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("todoAdd", function TodosComponent_Template_app_add_todo_todoAdd_4_listener($event) { return ctx.addTodo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Tasks List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Filter by Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodosComponent_Template_select_ngModelChange_12_listener($event) { return ctx.statusFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "To-Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "In-Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Filter by Priority:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodosComponent_Template_select_ngModelChange_24_listener($event) { return ctx.priorityFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "High");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Sort by Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TodosComponent_Template_select_ngModelChange_36_listener($event) { return ctx.sortType = $event; })("change", function TodosComponent_Template_select_change_36_listener() { return ctx.toggleSortType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Ascending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Descending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Due Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, TodosComponent_tbody_54_Template, 2, 1, "tbody", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodosComponent_Template_button_click_57_listener() { return ctx.exportToCSV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Export Tasks as CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, TodosComponent_ng_template_59_Template, 2, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.statusFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.priorityFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.sortType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredTodos.length > 0)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_5__["AddTodoComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".container[_ngcontent-%COMP%] {\r\n\r\n  margin-top: 2%;\r\n  padding: 20px;\r\n  width: 100%;\r\n}\r\n\r\n.todo[_ngcontent-%COMP%]{\r\n  margin-top: 4%;\r\n  width: 100%;\r\n}\r\n\r\n.strike[_ngcontent-%COMP%] {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.word-wrap[_ngcontent-%COMP%] {\r\n  word-wrap: break-word; \r\n  max-width: 200px; \r\n}\r\n\r\n.priority-high[_ngcontent-%COMP%] {\r\n  background-color: red;\r\n  color: white;\r\n  padding: 5px 10px;\r\n\r\n}\r\n\r\n.priority-medium[_ngcontent-%COMP%] {\r\n  background-color: yellow;\r\n  color: black;\r\n  padding: 5px 10px;\r\n\r\n}\r\n\r\n.priority-low[_ngcontent-%COMP%] {\r\n  background-color: green;\r\n  color: white;\r\n  padding: 5px 10px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsY0FBYztFQUNkLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UscUJBQXFCLEVBQUUsMkNBQTJDO0VBQ2xFLGdCQUFnQixFQUFFLG9EQUFvRDtBQUN4RTs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCOztBQUVuQiIsImZpbGUiOiJ0b2Rvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcblxyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50b2Rve1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zdHJpa2Uge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcbi53b3JkLXdyYXAge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDsgLyogRW5hYmxlIHdvcmQgd3JhcHBpbmcgaW4gdGhlIHRhYmxlIGNlbGwgKi9cclxuICBtYXgtd2lkdGg6IDIwMHB4OyAvKiBTZXQgYSBtYXhpbXVtIHdpZHRoIHRvIGNvbnRyb2wgdGhlIGNlbGwncyB3aWR0aCAqL1xyXG59XHJcblxyXG4ucHJpb3JpdHktaGlnaCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuXHJcbn1cclxuXHJcbi5wcmlvcml0eS1tZWRpdW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcblxyXG59XHJcblxyXG4ucHJpb3JpdHktbG93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "3siR":
/*!*************************************************************!*\
  !*** ./src/app/MyComponents/add-todo/add-todo.component.ts ***!
  \*************************************************************/
/*! exports provided: AddTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoComponent", function() { return AddTodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class AddTodoComponent {
    constructor() {
        this.todoAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onSubmit() {
        const todo = {
            id: this.id,
            title: this.title,
            desc: this.desc,
            active: true,
            taskDate: this.taskDate,
            priority: this.priority,
            status: this.status,
            history: this.history // Ensure the status is passed correctly
        };
        this.todoAdd.emit(todo);
    }
}
AddTodoComponent.ɵfac = function AddTodoComponent_Factory(t) { return new (t || AddTodoComponent)(); };
AddTodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddTodoComponent, selectors: [["app-add-todo"]], outputs: { todoAdd: "todoAdd" }, decls: 35, vars: 5, consts: [[1, "cform", 3, "ngSubmit"], [1, "my-3"], ["for", "title", 1, "form-label"], ["type", "text", "name", "title", "id", "title", "aria-describedby", "emailHelp", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "mb-3"], ["for", "desc", 1, "form-label"], ["type", "text", "name", "desc", "id", "desc", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "taskDate", 1, "form-label"], ["type", "date", "name", "taskDate", "id", "taskDate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "priority", 1, "form-label"], ["name", "priority", "id", "priority", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "high"], ["value", "medium"], ["value", "low"], ["for", "status", 1, "form-label"], ["name", "status", "id", "status", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "to-do"], ["value", "in-progress"], ["value", "completed"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary"]], template: function AddTodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddTodoComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Task-Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTodoComponent_Template_input_ngModelChange_4_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Task Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTodoComponent_Template_input_ngModelChange_8_listener($event) { return ctx.desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Task Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTodoComponent_Template_input_ngModelChange_12_listener($event) { return ctx.taskDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTodoComponent_Template_select_ngModelChange_16_listener($event) { return ctx.priority = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "High");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTodoComponent_Template_select_ngModelChange_26_listener($event) { return ctx.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "To-Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "In-Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Add Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.taskDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.priority);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.status);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"]], styles: [".cform[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n  -webkit-backdrop-filter: blur(5px);\r\n          backdrop-filter: blur(5px);\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);\r\n  max-width: 400px;\r\n  width: 100%;\r\n  margin-bottom: 0%;\r\n  margin-top: 3.5%;\r\n  margin-left: 34%;\r\n  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 100%);\r\n}\r\n\r\n\r\n\r\n.form-container[_ngcontent-%COMP%] {\r\n   \r\n}\r\n\r\n\r\n\r\n.cform[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n\r\n.cform[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  padding: 8px 12px;\r\n  width: 100%;\r\n  font-size: 14px;\r\n}\r\n\r\n\r\n\r\n.cform[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  padding: 8px 12px;\r\n  width: 100%;\r\n  font-size: 14px;\r\n  -webkit-appearance: none;\r\n          appearance: none;\r\n}\r\n\r\n\r\n\r\n.cform[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\r\n  background-color: #007bff;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 4px;\r\n  padding: 8px 16px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n.cform[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #0056b3;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC10b2RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCOztBQUUzQixtREFBbUQ7O0FBQ25EO0VBQ0UsMENBQTBDO0VBQzFDLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxR0FBcUc7QUFDdkc7O0FBRUEsa0RBQWtEOztBQUNsRDtFQUNFLG9CQUFvQixFQUFFLGlFQUFpRTtBQUN6Rjs7QUFFQSwwQkFBMEI7O0FBQzFCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUEsaUNBQWlDOztBQUNqQztFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysd0JBQWdCO1VBQWhCLGdCQUFnQjtBQUNsQjs7QUFFQSxrQ0FBa0M7O0FBQ2xDO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJhZGQtdG9kby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYWRkLXRvZG8uY29tcG9uZW50LmNzcyAqL1xyXG5cclxuLyogU3R5bGUgZm9yIHRoZSBmb3JtIGNvbnRhaW5lciB3aXRoIGdsYXNzIGVmZmVjdCAqL1xyXG4uY2Zvcm0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAwJTtcclxuICBtYXJnaW4tdG9wOiAzLjUlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzNCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgMTAwJSk7XHJcbn1cclxuXHJcbi8qIFJlbW92ZSB0aGUgbWFyZ2luLXRvcCBmcm9tIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIC8qIG1hcmdpbi10b3A6IDQlOyAqLyAvKiBSZW1vdmUgdGhpcyBsaW5lIG9yIHNldCBpdCB0byAwIGlmIHlvdSBkb24ndCB3YW50IGFueSBtYXJnaW4gKi9cclxufVxyXG5cclxuLyogU3R5bGUgZm9yIGZvcm0gbGFiZWxzICovXHJcbi5jZm9ybSAuZm9ybS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBTdHlsZSBmb3IgZm9ybSBpbnB1dCBmaWVsZHMgKi9cclxuLmNmb3JtIC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLyogU3R5bGUgZm9yIGZvcm0gc2VsZWN0IGZpZWxkcyAqL1xyXG4uY2Zvcm0gLmZvcm0tc2VsZWN0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLyogU3R5bGUgZm9yIHRoZSBBZGQgVGFzayBidXR0b24gKi9cclxuLmNmb3JtIC5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jZm9ybSAuYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "58hc":
/*!*******************************************************!*\
  !*** ./src/app/MyComponents/about/about.component.ts ***!
  \*******************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GXMy":
/*!***************************************************************!*\
  !*** ./src/app/MyComponents/todo-item/todo-item.component.ts ***!
  \***************************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "strike": a0 }; };
class TodoItemComponent {
    constructor() {
        this.todoDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.todoCheckbox = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onStatusChange() {
        this.todoCheckbox.emit(this.todo);
    }
    ngOnInit() {
    }
    onClick(todo) {
        this.todoDelete.emit(todo);
    }
    onCheckboxClick(todo) {
        this.todoCheckbox.emit(todo);
    }
}
TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) { return new (t || TodoItemComponent)(); };
TodoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoItemComponent, selectors: [["app-todo-item"]], inputs: { todo: "todo", i: "i" }, outputs: { todoDelete: "todoDelete", todoCheckbox: "todoCheckbox" }, decls: 17, vars: 22, consts: [[1, "my-3", "custom-table"], [3, "ngClass"], [1, "mb-3", "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "id", "click"], [1, "form-check-label", 3, "for"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function TodoItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_input_click_12_listener() { return ctx.onCheckboxClick(ctx.todo); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_button_click_15_listener() { return ctx.onClick(ctx.todo); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.todo.active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.todo.active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todo.desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.todo.active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todo.taskDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.todo.active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todo.priority);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.todo.active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todo.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "todo", ctx.i, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "todo", ctx.i, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".strike[_ngcontent-%COMP%]{\r\n    text-decoration: line-through;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8taXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InRvZG8taXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0cmlrZXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'cwh-todo-list';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "bg-body-tertiary"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "content-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Task Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\r\n    background-color: #d9e4f5;\r\n    background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);\r\n    min-height: 100vh;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGtFQUFrRTtJQUNsRSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWU0ZjU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZDllNGY1IDAlLCAjZjVlM2U2IDc0JSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgXHJcbiJdfQ== */"] });


/***/ }),

/***/ "UqFQ":
/*!*************************!*\
  !*** ./src/app/Todo.ts ***!
  \*************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
class Todo {
    constructor() {
        this.history = []; // Initialize the history log as an empty array
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _MyComponents_todos_todos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyComponents/todos/todos.component */ "2s5v");
/* harmony import */ var _MyComponents_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyComponents/todo-item/todo-item.component */ "GXMy");
/* harmony import */ var _MyComponents_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MyComponents/add-todo/add-todo.component */ "3siR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _MyComponents_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MyComponents/about/about.component */ "58hc");
/* harmony import */ var _MyComponents_edit_todo_edit_todo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MyComponents/edit-todo/edit-todo.component */ "+arX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _MyComponents_todos_todos_component__WEBPACK_IMPORTED_MODULE_4__["TodosComponent"],
        _MyComponents_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__["TodoItemComponent"],
        _MyComponents_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_6__["AddTodoComponent"],
        _MyComponents_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        _MyComponents_edit_todo_edit_todo_component__WEBPACK_IMPORTED_MODULE_9__["EditTodoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _MyComponents_todos_todos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyComponents/todos/todos.component */ "2s5v");
/* harmony import */ var _MyComponents_edit_todo_edit_todo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyComponents/edit-todo/edit-todo.component */ "+arX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: 'todos', component: _MyComponents_todos_todos_component__WEBPACK_IMPORTED_MODULE_1__["TodosComponent"] },
    { path: 'edit-todo/:id', component: _MyComponents_edit_todo_edit_todo_component__WEBPACK_IMPORTED_MODULE_2__["EditTodoComponent"] },
    { path: '', redirectTo: '/todos', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map