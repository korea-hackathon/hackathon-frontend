#include <stdio.h>
#include <string.h>
char arr[1001];
char arr2[1001];
int occour[1001];
int occour2[1001];
int bool=0;
int main(){
    int t; scanf("%d",&t);
    for(int i=0;i<t;i++){
        int occour[1001]={0,};
        int occour2[1001]={0,};
        scanf("%s %s",arr,arr2);
        for(int j=0;j<strlen(arr);j++){
            occour[arr[j]]++;
            occour2[arr2[j]]++;
        }
        for(int k=0;k<1000;k++){
            if(occour[k]==occour2[k]) {bool =1;continue;}
            else {printf("Impossible\n"); bool=0;break;}
        }
        if(bool==1) printf("Possible\n");
    }

}