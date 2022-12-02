#include <bits/stdc++.h>
using namespace std;
int board[102][102];
int check[102][102];
int dx[4]={0,1,0,-1};
int dy[4]={1,0,-1,0};
queue<pair<int,int>> Q;
int main(){
    int max0=-1;
    int n; cin>>n;
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cin >> board[i][j];
            if(board[i][j]>max0){
                max0 = board[i][j];
            }
        }
    }
    int a=0;
    int result=-1;
    int ans=0;
    while(a<max0){
        ans=0;
        a++;
        Q = queue<pair<int,int>>();
        memset(check,0,sizeof(check));
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                if(board[i][j]>a && !check[i][j]){
                    ans++;
                    Q.push({i,j});
                    check[i][j]=1;
                    while(!Q.empty()){
                        int x = Q.front().first;
                        int y = Q.front().second;
                        Q.pop();
                        for(int k=0;k<4;k++){
                            int nx = x + dx[k];
                            int ny = y + dy[k];
                            if(nx>=0 && nx<n && ny>=0 && ny<n){
                            if(board[nx][ny]>a && !check[nx][ny]){
                                Q.push({nx,ny});
                                check[nx][ny]=1;
                            }
                            }
                        }
                    }
                }
                result = max(result,ans);
            }
        }
    }
    if(result==0) cout<<"1";
    cout << result<<"\n";
}