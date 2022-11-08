#include <bits/stdc++.h>
using namespace std;
int main(){
    int t; cin >> t;
    int cnt=0;
    while(t--){
        int n; cin >> n;
        int plus;
        if(n==1) continue;
            for(int j=1;j<=n;j++){
                if(n%j==0 && j!=n && j!=1){
                    plus=0;
                    break;
                }
                else plus=1;
            }
            cnt+=plus;
    }
    printf("%d",cnt);
}