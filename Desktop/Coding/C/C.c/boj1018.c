#include <stdio.h>
#define minfinder(a,b) a<b ? a:b 
int main(){
    int n,m; scanf("%d %d",&n,&m);
    int min=80;
    char arr[51][51];
    for(int i=0;i<n;i++){
        scanf("%s",arr[i]);
    }
    for(int i=0;i<n-7;i++){
        for(int j=0;j<m-7;j++){
            int cntW=0,cntB=0;
            for(int k=i;k<i+8;k++){
                for(int p=j;p<j+8;p++){
                    if((k+p)%2==0){
                        if(arr[k][p]=='B') cntW++;
                        else cntB++;
                    }
                    else{
                        if(arr[k][p]=='B') cntB++;
                        else cntW++;
                    }
                }
            }
            min = minfinder(min,cntB);
            min = minfinder(min,cntW);
        }
    }
    printf("%d",min);
}