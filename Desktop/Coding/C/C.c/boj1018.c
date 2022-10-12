#include <stdio.h>
#define minfinder(a,b) a<b ? a:b  // a가 b보다 작으면 a 를 반환 그렇지 않으면 b를 반환
int main(){
    int n,m; scanf("%d %d",&n,&m); // 체스판 크기 받아오기
    int min=80;
    char arr[50][51]; 
    for(int i=0;i<n;i++){
        scanf("%s",arr[i]); // 한줄씩 n번 반복해서 체스판 입력받기
    }
    for(int i=0;i<n-7;i++){ // 옆으로 움직여 가면서 최소값을 찾아야 함으로 n-7번은 무슨 뜻이나면, 8*8 체스판에서 최소값을 찾아야 하니 -7을 해준거임
        for(int j=0;j<m-7;j++){ //마찬가지
            int count=0,count1=0; // 들어갈 자리에 잘 들어갔는지 (count) 들어갈 자리에 잘 못들어가서 바꿔야 하는 개수 (count1)
            for(int k=i;k<i+8;k++){
                for(int p=j;p<j+8;p++){
                    if((k+p)%2==0){ //표를 그리고 봤을 때 행과 열을 더한 값이 짝수라면 흰색이 들어가야 한다.
                        if(arr[k][p]=='W') count++; // White가 들어갈 자리가 맞다면 count++
                        else count1++; //들어갈 자리가 아니라면 count1++
                    }
                    else{
                        if(arr[k][p]=='B') count++; //마찬가지이다
                        else count1++;
                    }
                }
            }
            min = minfinder(min,count); // 둘중 더 작은걸 min에 저장
            min = minfinder(min,count1);
        }
    }
    printf("%d",min);
}