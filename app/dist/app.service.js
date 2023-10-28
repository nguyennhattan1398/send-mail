"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const sgMail = require('@sendgrid/mail');
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
    sendMail() {
        sgMail.setApiKey('SG.n9iGd69TTqKf259tbXJMRw.VrDpLh6kpPIbzJl9H3u_qp8XZt9R0NbfEna5QEWlU6');
        const msg = {
            to: 'nguyennhattan1398@gmail.com',
            from: 'nguyennhattan1397@gmail.com',
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        sgMail
            .send(msg)
            .then(() => {
            console.log('Email sent');
        })
            .catch((error) => {
            console.error(JSON.stringify(error));
        });
        return 'Success!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map