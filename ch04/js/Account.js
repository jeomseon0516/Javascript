class Account {

    // 생성자
    constructor(bank, id, name, balance) {
        // 속성 선언
        this.bank = bank;
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    // 기능
    deposit(balance) {
        this.balance += balance;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    show() {
        document.write('<p>');
        document.write('은행명 : ' + this.bank + '<br>');
        document.write('계좌번호 : ' + this.id + '<br>');
        document.write('예금주명 : ' + this.name + '<br>');
        document.write('잔액 : ' + this.balance + '<br>');
        document.write('</p>');
    }
}