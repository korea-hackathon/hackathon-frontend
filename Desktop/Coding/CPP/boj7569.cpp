#include <bits/stdc++.h>
using namespace std;
int board[100][100][100];
int check[100][100][100];
int dx[6]={0,1,-1,0,1,-1};
int dy[6]={1,0,0,-1,1,-1};
queue<tuple<int,int,int>> Q;
int main(){
    ios_base::sync_with_stdio(0);
    cin.tie(NULL);
    memset(check,-1,sizeof(check));
    int n,m,h; cin >> n >> m >> h;
    for(int i=0;i<h;i++){
        for(int j=0;j<n;j++){
            for(int k=0;k<m;k++){
                cin >> board[i][j][k];
                if(board[i][j][k]==1){
                    Q.push({i,j,k});
                    check[i][j][k]=0;
                }

            }
        }
    }
    int ans=-1;
    int nx,ny,nh;
    while(!Q.empty()){
        int x = get<1>(Q.front());
        int y = get<2>(Q.front());
        int h2 = get<0>(Q.front());
        Q.pop();
        for(int i=0;i<6;i++){
            if((dx[i]==-1 && dy[i]==-1)){
                nx = x;
                ny = y;
                if(h2-1>=0) int nh = h2 - 1;
                else int nh = h;
            }
            else if(dx[i]==1 && dy[i]==1){
                nx = x;
                ny = y;
                if(h2+1<h) int nh = h2 + 1;
                else int nh = h;
            }
            else if(dx[i]!=dy[i]){
                nx = x + dx[i];
                ny = y + dy[i];
                nh = h2;
            }
            if(nx>=0 && nx<n && ny>=0 && ny<m && nh>=0 && nh<h){
                if(check[nh][nx][ny]==-1 && board[nh][nx][ny]==0){\
                    check[nh][nx][ny]= check[h2][x][y]+1;
                    Q.push({nh,nx,ny});
                }
            }
        }
    }
    for(int i=0;i<h;i++){
        for(int j=0;j<n;j++){
            for(int k=0;k<m;k++){
                if(board[i][j][k]==0 && check[i][j][k]==-1){
                    cout << "-1";
                    return 0;
                }
                else{
                    if(ans< check[i][j][k]){
                        ans = check[i][j][k];
                    }
                }
            }
        }
    }
    cout << ans;
}