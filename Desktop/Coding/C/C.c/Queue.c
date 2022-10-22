#include <stdio.h>
int dat[100001];
int head = 0, tail = 0;

void push(int x){
    dat[tail++]=x;
}

void pop(){
    head++;
}

int front(){
    return dat[head];
}

int back(){
    return dat[tail-1];
}

void test(){
  push(10); push(20); push(30);
  //cout << front() << '\n'; // 10
  //cout << back() << '\n'; // 30
  printf("%d\n",front());
  printf("%d\n",back());
  pop(); pop();
  push(15); push(25);
  printf("%d\n",front());
  printf("%d\n",back());
  //cout << front() << '\n'; // 30
  //cout << back() << '\n'; // 25
}

int main(void) {
  test();  
}