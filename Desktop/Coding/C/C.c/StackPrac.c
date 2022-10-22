#include <stdio.h>
const int MX = 1000005;
int dat[MX];
int pos = 0;

void push(int x){
    dat[pos++]=x;
}

void pop(){
    pos--;
}

int top(){
    return dat[pos-1];
}

void test(){
  push(5); push(4); push(3);
  printf("%d\n",top());
  pop(); pop();
  printf("%d\n",top());
  //cout << top() << '\n'; // 5
  push(10); push(12);
  //cout << top() << '\n'; // 12
  printf("%d\n",top());
  pop();
  //cout << top() << '\n'; // 10
  printf("%d\n",top());
}

int main(void) {
	test();
}