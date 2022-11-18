#include <bits/stdc++.h>
using namespace std;
bool compare(pair<int, int>a, pair<int, int>b) {
	if (a.second == b.second) {
		return a.first < b.first;
	}   
	else {
		return a.second < b.second;
	}
}
int main(){
    vector<pair<int,int>> v;
    int te; cin>> te;
    while(te--){
        int n,m; cin >> n >> m ;
        v.push_back({n,m});
    }
    sort(v.begin(),v.end(),compare);
    int t=0;
    int ans=0;
    for(auto i=v.begin();i<v.end();i++){
        int n = i->first;
        if(t<=n){
            ans++;
            t = i->second;
        }
    }  
    cout << ans;
}