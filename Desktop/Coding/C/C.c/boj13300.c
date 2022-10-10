#include <stdio.h>
int main(){
    int n,k; scanf("%d %d",&n,&k);
    int gen,gra;
    int ans=0;
    int menarr[7]={0,};
    int womenarr[7]={0,};
    for(int i=0;i<n;i++){
        scanf("%d %d",&gen,&gra);
        if(gen) // 남자
        {
            menarr[gra]++;
        }
        else{
            womenarr[gra]++;
        }
    }
    for(int i=1;i<7;i++){
        ans+= menarr[i]/k;
        ans+= womenarr[i]/k;
        if(menarr[i]%k) ans++;
        if(womenarr[i]%k) ans++;
    }
    printf("%d",ans);
}