#include <bits/stdc++.h>
using namespace std;
int cnt=0;
int n;
void solve(int sum){
    if(sum==n){
        cnt++;
        return;
    }
    if(sum>n) return;
    else{
        for(int i=1;i<=3;i++){
            solve(sum+i);
        }
    }
}
int main(){
    int t;
    cin >> t;
    for(int i=0;i<t;i++){
        cin >> n;
        solve(0);
        cout << cnt << "\n";
        cnt=0;
    }
}