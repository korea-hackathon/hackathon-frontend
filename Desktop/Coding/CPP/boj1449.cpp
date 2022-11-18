#include <bits/stdc++.h>
using namespace std;
int main(){
    int n,m; cin >> n >> m;
    int ans=0;
    int arr[100001]={0,};
    for(int i=0;i<n;i++){
        int a; cin >> a;
        arr[a] = 1;
    }
    for(int i=1;i<1000;i++){
        if(arr[i]==1){
            for(int j=i;j<i+m;j++){
                arr[j]=0;
            }
            ans++;
        }
    }
    cout << ans;
}