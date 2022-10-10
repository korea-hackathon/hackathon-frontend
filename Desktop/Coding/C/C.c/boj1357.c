#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int reverse(char sum[]){
    int n = 1;
    int sum1 = atoi(sum);
    int result=0;
    int len = strlen(sum);
    for(int j=0;j<len-1;j++){
        n*=10;
    }
    for(int i=0;i<len;i++){
        result += (sum1%10)*n;
        n/=10;
        sum1/=10;
    }
    
    return result;
}
int main(){
    char sum[1001];
    char sum2[1001];
    char result[1001];
    scanf("%s %s",sum,sum2);
    sprintf(result,"%d",reverse(sum)+reverse(sum2));
    printf("%d",reverse(result));
    
}