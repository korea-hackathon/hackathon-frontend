#include <stdio.h>
int arr[30000005];
int head=0,tail=0;
void push(int x){
	arr[tail++]=x;
}
void pop(){
	arr[head++]=0;
}
int main(){
	int n,m; scanf("%d %d",&n,&m);
	for(int i=1;i<=n;i++){
		push(i);
	}
	int cnt=0;
	printf("<");
	while(tail-head>0){
		cnt++;
		if(cnt%m==0){
			if(tail-head!=1) printf("%d, ",arr[head]);
			else if(tail-head==1) printf("%d>",arr[head]);
			pop();
		}
		else{
			push(arr[head]);
			pop();
		}
	}
}