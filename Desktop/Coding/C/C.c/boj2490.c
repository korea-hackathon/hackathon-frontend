#include <stdio.h>
int main(){
    int cnt=0;
    int n;
    for(int j=0;j<3;j++){
        cnt=0;
for(int i=0;i<4;i++){
        scanf("%d",&n);
        if(n==0) cnt++;;
    }
    switch (cnt)
    {
    case 1:
        printf("A\n");
        break;
    case 2:
        printf("B\n");
        break;
    case 3:
    printf("C\n");
    break;
    case 4:
    printf("D\n");
    break;
    case 0:
    printf("E");
    break;
    }
    
    }
    
}