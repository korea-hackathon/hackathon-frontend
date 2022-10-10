        #include <stdio.h>
        #include <string.h>
        #include <stdlib.h>
        int main(){
            int a,b,c,d;
            char a1[1000001],b1[1000001],c1[1000001],d1[1000001];
            scanf("%d %d %d %d",&a,&b,&c,&d);
            sprintf(a1,"%d",a);
            sprintf(b1,"%d",b);
            sprintf(c1,"%d",c);
            sprintf(d1,"%d",d);

            strcat(a1,b1);
            strcat(c1,d1);
            printf("%lld",atoll(a1)+atoll(c1));
        }