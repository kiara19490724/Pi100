function link1() {
    // alert(colNum);
    // colNum = 1;
    // colNum = 3;
    // colNum = 37;
    // colNum = 40;
    // colNum = 49;
    // colNum = 68;
    // colNum = 94;
    // colNum = 95;

    if (colNum == 1) {
        // document.getElementById("inDataId").value = "1";          入力値をを表示

        document.getElementById("col99Id").value = "3.";          // 小数第11位まで表示
        document.getElementById("col100Id").value = "1";
        document.getElementById("col101Id").value = "4";
        document.getElementById("col102Id").value = "1";
        document.getElementById("col103Id").value = "5";
        document.getElementById("col104Id").value = "9";
        document.getElementById("col105Id").value = "2";
        document.getElementById("col106Id").value = "6";
        document.getElementById("col107Id").value = "5";
        document.getElementById("col108Id").value = "3";
        document.getElementById("col109Id").value = "5";
        document.getElementById("col110Id").value = "8";

          // 【キー[1]をクリックすると計時が始まります】を非表示
          document.getElementById("initialMessageId").innerHTML = "";

          // 経過時間の表示（初期状態）
          piStart = new Date();  // スタート時間を退避

          piM = 0;
          piS = 0;
          piMS = 000;

          document.getElementById("elapsedTimeId").innerHTML = elapsedTime20p();
          function elapsedTime20p() {
              var et24 = "タイム:" + piM + "分" + piS + "秒" + piMS;
              return et24;
          }

          //クリックミス回数の表示（初期状態）
          document.getElementById("clickMissId").innerHTML = clickMiss18p();
          function clickMiss18p() {
          cm18 = "クリックミス:" + 0 + "回"
          return cm18;
          }

          colNum = colNum +1;

        // document.getElementById("inDataId").value = "";           入力部を無表示にリセット

    } else if (colNum ==3) {
        document.getElementById("col97Id").value = "3.";          // 小数第13位まで表示
        document.getElementById("col98Id").value = "1";
        document.getElementById("col99Id").value = "4";
        document.getElementById("col100Id").value = "1";
        document.getElementById("col101Id").value = "5";
        document.getElementById("col102Id").value = "9";
        document.getElementById("col103Id").value = "2";
        document.getElementById("col104Id").value = "6";
        document.getElementById("col105Id").value = "5";
        document.getElementById("col106Id").value = "3";
        document.getElementById("col107Id").value = "5";
        document.getElementById("col108Id").value = "8";
        document.getElementById("col109Id").value = "9";
        document.getElementById("col110Id").value = "7";

          colNum = colNum +1;

    } else if (colNum == 37) {
        document.getElementById("col63Id").value = "3.";
        document.getElementById("col64Id").value = "1";
        document.getElementById("col65Id").value = "4";
        document.getElementById("col66Id").value = "1";
        document.getElementById("col67Id").value = "5";
        document.getElementById("col68Id").value = "9";
        document.getElementById("col69Id").value = "2";
        document.getElementById("col70Id").value = "6";
        document.getElementById("col71Id").value = "5";
        document.getElementById("col72Id").value = "3";
        document.getElementById("col73Id").value = "5";
        document.getElementById("col74Id").value = "8";
        document.getElementById("col75Id").value = "9";
        document.getElementById("col76Id").value = "7";
        document.getElementById("col77Id").value = "9";
        document.getElementById("col78Id").value = "3";
        document.getElementById("col79Id").value = "2";
        document.getElementById("col80Id").value = "3";
        document.getElementById("col81Id").value = "8";
        document.getElementById("col82Id").value = "4";
        document.getElementById("col83Id").value = "6";
        document.getElementById("col84Id").value = "2";
        document.getElementById("col85Id").value = "6";
        document.getElementById("col86Id").value = "4";
        document.getElementById("col87Id").value = "3";
        document.getElementById("col88Id").value = "3";
        document.getElementById("col89Id").value = "8";
        document.getElementById("col90Id").value = "3";
        document.getElementById("col91Id").value = "2";
        document.getElementById("col92Id").value = "7";
        document.getElementById("col93Id").value = "9";
        document.getElementById("col94Id").value = "5";
        document.getElementById("col95Id").value = "0";
        document.getElementById("col96Id").value = "2";
        document.getElementById("col97Id").value = "8";
        document.getElementById("col98Id").value = "8";
        document.getElementById("col99Id").value = "4";
        document.getElementById("col100Id").value = "1";    // ☜
        document.getElementById("col101Id").value = "9";
        document.getElementById("col102Id").value = "7";
        document.getElementById("col103Id").value = "1";
        document.getElementById("col104Id").value = "6";
        document.getElementById("col105Id").value = "9";
        document.getElementById("col106Id").value = "3";
        document.getElementById("col107Id").value = "9";
        document.getElementById("col108Id").value = "9";
        document.getElementById("col109Id").value = "3";
        document.getElementById("col110Id").value = "7";    // 小数第47位

        colNum = colNum + 1;

      } else if (colNum == 40) {
          document.getElementById("col60Id").value = "3.";
          document.getElementById("col61Id").value = "1";
          document.getElementById("col62Id").value = "4";
          document.getElementById("col63Id").value = "1";
          document.getElementById("col64Id").value = "5";
          document.getElementById("col65Id").value = "9";
          document.getElementById("col66Id").value = "2";
          document.getElementById("col67Id").value = "6";
          document.getElementById("col68Id").value = "5";
          document.getElementById("col69Id").value = "3";
          document.getElementById("col70Id").value = "5";
          document.getElementById("col71Id").value = "8";
          document.getElementById("col72Id").value = "9";
          document.getElementById("col73Id").value = "7";
          document.getElementById("col74Id").value = "9";
          document.getElementById("col75Id").value = "3";
          document.getElementById("col76Id").value = "2";
          document.getElementById("col77Id").value = "3";
          document.getElementById("col78Id").value = "8";
          document.getElementById("col79Id").value = "4";
          document.getElementById("col80Id").value = "6";
          document.getElementById("col81Id").value = "2";
          document.getElementById("col82Id").value = "6";
          document.getElementById("col83Id").value = "4";
          document.getElementById("col84Id").value = "3";
          document.getElementById("col85Id").value = "3";
          document.getElementById("col86Id").value = "8";
          document.getElementById("col87Id").value = "3";
          document.getElementById("col88Id").value = "2";
          document.getElementById("col89Id").value = "7";
          document.getElementById("col90Id").value = "9";
          document.getElementById("col91Id").value = "5";
          document.getElementById("col92Id").value = "0";
          document.getElementById("col93Id").value = "2";
          document.getElementById("col94Id").value = "8";
          document.getElementById("col95Id").value = "8";
          document.getElementById("col96Id").value = "4";
          document.getElementById("col97Id").value = "1";
          document.getElementById("col98Id").value = "9";
          document.getElementById("col99Id").value = "7";
          document.getElementById("col100Id").value = "1";    // ☜
          document.getElementById("col101Id").value = "6";
          document.getElementById("col102Id").value = "9";
          document.getElementById("col103Id").value = "3";
          document.getElementById("col104Id").value = "9";
          document.getElementById("col105Id").value = "9";
          document.getElementById("col106Id").value = "3";
          document.getElementById("col107Id").value = "7";
          document.getElementById("col108Id").value = "5";
          document.getElementById("col109Id").value = "1";
          document.getElementById("col110Id").value = "0";    // 小数第50位

          colNum = colNum + 1;

    } else if (colNum == 49) {
      document.getElementById("col51Id").value = "3.";
      document.getElementById("col52Id").value = "1";
      document.getElementById("col53Id").value = "4";
      document.getElementById("col54Id").value = "1";
      document.getElementById("col55Id").value = "5";
      document.getElementById("col56Id").value = "9";
      document.getElementById("col57Id").value = "2";
      document.getElementById("col58Id").value = "6";
      document.getElementById("col59Id").value = "5";
      document.getElementById("col60Id").value = "3";
      document.getElementById("col61Id").value = "5";
      document.getElementById("col62Id").value = "8";
      document.getElementById("col63Id").value = "9";
      document.getElementById("col64Id").value = "7";
      document.getElementById("col65Id").value = "9";
      document.getElementById("col66Id").value = "3";
      document.getElementById("col67Id").value = "2";
      document.getElementById("col68Id").value = "3";
      document.getElementById("col69Id").value = "8";
      document.getElementById("col70Id").value = "4";
      document.getElementById("col71Id").value = "6";
      document.getElementById("col72Id").value = "2";
      document.getElementById("col73Id").value = "6";
      document.getElementById("col74Id").value = "4";
      document.getElementById("col75Id").value = "3";
      document.getElementById("col76Id").value = "3";
      document.getElementById("col77Id").value = "8";
      document.getElementById("col78Id").value = "3";
      document.getElementById("col79Id").value = "2";
      document.getElementById("col80Id").value = "7";
      document.getElementById("col81Id").value = "9";
      document.getElementById("col82Id").value = "5";
      document.getElementById("col83Id").value = "0";
      document.getElementById("col84Id").value = "2";
      document.getElementById("col85Id").value = "8";
      document.getElementById("col86Id").value = "8";
      document.getElementById("col87Id").value = "4";
      document.getElementById("col88Id").value = "1";
      document.getElementById("col89Id").value = "9";
      document.getElementById("col90Id").value = "7";
      document.getElementById("col91Id").value = "1";
      document.getElementById("col92Id").value = "6";
      document.getElementById("col93Id").value = "9";
      document.getElementById("col94Id").value = "3";
      document.getElementById("col95Id").value = "9";
      document.getElementById("col96Id").value = "9";
      document.getElementById("col97Id").value = "3";
      document.getElementById("col98Id").value = "7";
      document.getElementById("col99Id").value = "5";
      document.getElementById("col100Id").value = "1";
      document.getElementById("col101Id").value = "0";
      document.getElementById("col102Id").value = "5";
      document.getElementById("col103Id").value = "8";
      document.getElementById("col104Id").value = "2";
      document.getElementById("col105Id").value = "0";
      document.getElementById("col106Id").value = "9";
      document.getElementById("col107Id").value = "7";
      document.getElementById("col108Id").value = "4";
      document.getElementById("col109Id").value = "9";
      document.getElementById("col110Id").value = "4";

        colNum = colNum + 1;

    } else if (colNum == 68) {
      document.getElementById("col32Id").value = "3.";
      document.getElementById("col33Id").value = "1";
      document.getElementById("col34Id").value = "4";
      document.getElementById("col35Id").value = "1";
      document.getElementById("col36Id").value = "5";
      document.getElementById("col37Id").value = "9";
      document.getElementById("col38Id").value = "2";
      document.getElementById("col39Id").value = "6";
      document.getElementById("col40Id").value = "5";
      document.getElementById("col41Id").value = "3";
      document.getElementById("col42Id").value = "5";
      document.getElementById("col43Id").value = "8";
      document.getElementById("col44Id").value = "9";
      document.getElementById("col45Id").value = "7";
      document.getElementById("col46Id").value = "9";
      document.getElementById("col47Id").value = "3";
      document.getElementById("col48Id").value = "2";
      document.getElementById("col49Id").value = "3";
      document.getElementById("col50Id").value = "8";
      document.getElementById("col51Id").value = "4";
      document.getElementById("col52Id").value = "6";
      document.getElementById("col53Id").value = "2";
      document.getElementById("col54Id").value = "6";
      document.getElementById("col55Id").value = "4";
      document.getElementById("col56Id").value = "3";
      document.getElementById("col57Id").value = "3";
      document.getElementById("col58Id").value = "8";
      document.getElementById("col59Id").value = "3";
      document.getElementById("col60Id").value = "2";
      document.getElementById("col61Id").value = "7";
      document.getElementById("col62Id").value = "9";
      document.getElementById("col63Id").value = "5";
      document.getElementById("col64Id").value = "0";
      document.getElementById("col65Id").value = "2";
      document.getElementById("col66Id").value = "8";
      document.getElementById("col67Id").value = "8";
      document.getElementById("col68Id").value = "4";
      document.getElementById("col69Id").value = "1";
      document.getElementById("col70Id").value = "9";
      document.getElementById("col71Id").value = "7";
      document.getElementById("col72Id").value = "1";
      document.getElementById("col73Id").value = "6";
      document.getElementById("col74Id").value = "9";
      document.getElementById("col75Id").value = "3";
      document.getElementById("col76Id").value = "9";
      document.getElementById("col77Id").value = "9";
      document.getElementById("col78Id").value = "3";
      document.getElementById("col79Id").value = "7";
      document.getElementById("col80Id").value = "5";
      document.getElementById("col81Id").value = "1";
      document.getElementById("col82Id").value = "0";
      document.getElementById("col83Id").value = "5";
      document.getElementById("col84Id").value = "8";
      document.getElementById("col85Id").value = "2";
      document.getElementById("col86Id").value = "0";
      document.getElementById("col87Id").value = "9";
      document.getElementById("col88Id").value = "7";
      document.getElementById("col89Id").value = "4";
      document.getElementById("col90Id").value = "9";
      document.getElementById("col91Id").value = "4";
      document.getElementById("col92Id").value = "4";
      document.getElementById("col93Id").value = "5";
      document.getElementById("col94Id").value = "9";
      document.getElementById("col95Id").value = "2";
      document.getElementById("col96Id").value = "3";
      document.getElementById("col97Id").value = "0";
      document.getElementById("col98Id").value = "7";
      document.getElementById("col99Id").value = "8";
      document.getElementById("col100Id").value = "1";
      document.getElementById("col101Id").value = "6";
      document.getElementById("col102Id").value = "4";
      document.getElementById("col103Id").value = "0";
      document.getElementById("col104Id").value = "6";
      document.getElementById("col105Id").value = "2";
      document.getElementById("col106Id").value = "8";
      document.getElementById("col107Id").value = "6";
      document.getElementById("col108Id").value = "2";
      document.getElementById("col109Id").value = "0";
      document.getElementById("col110Id").value = "8";

      colNum = colNum + 1;

    } else if (colNum == 94) {
      document.getElementById("col06Id").value = "3.";
      document.getElementById("col07Id").value = "1";
      document.getElementById("col08Id").value = "4";
      document.getElementById("col09Id").value = "1";
      document.getElementById("col10Id").value = "5";
      document.getElementById("col11Id").value = "9";
      document.getElementById("col12Id").value = "2";
      document.getElementById("col13Id").value = "6";
      document.getElementById("col14Id").value = "5";
      document.getElementById("col15Id").value = "3";
      document.getElementById("col16Id").value = "5";
      document.getElementById("col17Id").value = "8";
      document.getElementById("col18Id").value = "9";
      document.getElementById("col19Id").value = "7";
      document.getElementById("col20Id").value = "9";
      document.getElementById("col21Id").value = "3";
      document.getElementById("col22Id").value = "2";
      document.getElementById("col23Id").value = "3";
      document.getElementById("col24Id").value = "8";
      document.getElementById("col25Id").value = "4";
      document.getElementById("col26Id").value = "6";
      document.getElementById("col27Id").value = "2";
      document.getElementById("col28Id").value = "6";
      document.getElementById("col29Id").value = "4";
      document.getElementById("col30Id").value = "3";
      document.getElementById("col31Id").value = "3";
      document.getElementById("col32Id").value = "8";
      document.getElementById("col33Id").value = "3";
      document.getElementById("col34Id").value = "2";
      document.getElementById("col35Id").value = "7";
      document.getElementById("col36Id").value = "9";
      document.getElementById("col37Id").value = "5";
      document.getElementById("col38Id").value = "0";
      document.getElementById("col39Id").value = "2";
      document.getElementById("col40Id").value = "8";
      document.getElementById("col41Id").value = "8";
      document.getElementById("col42Id").value = "4";
      document.getElementById("col43Id").value = "1";
      document.getElementById("col44Id").value = "9";
      document.getElementById("col45Id").value = "7";
      document.getElementById("col46Id").value = "1";
      document.getElementById("col47Id").value = "6";
      document.getElementById("col48Id").value = "9";
      document.getElementById("col49Id").value = "3";
      document.getElementById("col50Id").value = "9";
      document.getElementById("col51Id").value = "9";
      document.getElementById("col52Id").value = "3";
      document.getElementById("col53Id").value = "7";
      document.getElementById("col54Id").value = "5";
      document.getElementById("col55Id").value = "1";
      document.getElementById("col56Id").value = "0";
      document.getElementById("col57Id").value = "5";
      document.getElementById("col58Id").value = "8";
      document.getElementById("col59Id").value = "2";
      document.getElementById("col60Id").value = "0";
      document.getElementById("col61Id").value = "9";
      document.getElementById("col62Id").value = "7";
      document.getElementById("col63Id").value = "4";
      document.getElementById("col64Id").value = "9";
      document.getElementById("col65Id").value = "4";
      document.getElementById("col66Id").value = "4";
      document.getElementById("col67Id").value = "5";
      document.getElementById("col68Id").value = "9";
      document.getElementById("col69Id").value = "2";
      document.getElementById("col70Id").value = "3";
      document.getElementById("col71Id").value = "0";
      document.getElementById("col72Id").value = "7";
      document.getElementById("col73Id").value = "8";
      document.getElementById("col74Id").value = "1";
      document.getElementById("col75Id").value = "6";
      document.getElementById("col76Id").value = "4";
      document.getElementById("col77Id").value = "0";
      document.getElementById("col78Id").value = "6";
      document.getElementById("col79Id").value = "2";
      document.getElementById("col80Id").value = "8";
      document.getElementById("col81Id").value = "6";
      document.getElementById("col82Id").value = "2";
      document.getElementById("col83Id").value = "0";
      document.getElementById("col84Id").value = "8";
      document.getElementById("col85Id").value = "9";
      document.getElementById("col86Id").value = "9";
      document.getElementById("col87Id").value = "8";
      document.getElementById("col88Id").value = "6";
      document.getElementById("col89Id").value = "2";
      document.getElementById("col90Id").value = "8";
      document.getElementById("col91Id").value = "0";
      document.getElementById("col92Id").value = "3";
      document.getElementById("col93Id").value = "4";
      document.getElementById("col94Id").value = "8";
      document.getElementById("col95Id").value = "2";
      document.getElementById("col96Id").value = "5";
      document.getElementById("col97Id").value = "3";
      document.getElementById("col98Id").value = "4";
      document.getElementById("col99Id").value = "2";
      document.getElementById("col100Id").value = "1";
      document.getElementById("col101Id").value = "1";
      document.getElementById("col102Id").value = "7";
      document.getElementById("col103Id").value = "0";
      document.getElementById("col104Id").value = "6";
      document.getElementById("col105Id").value = "7";
      document.getElementById("col106Id").value = "";
      document.getElementById("col107Id").value = "";
      document.getElementById("col108Id").value = "";
      document.getElementById("col109Id").value = "";
      document.getElementById("col110Id").value = "";

      colNum = colNum + 1;

    } else if (colNum == 95) {
      document.getElementById("col05Id").value = "3.";
      document.getElementById("col06Id").value = "1";
      document.getElementById("col07Id").value = "4";
      document.getElementById("col08Id").value = "1";
      document.getElementById("col09Id").value = "5";
      document.getElementById("col10Id").value = "9";
      document.getElementById("col11Id").value = "2";
      document.getElementById("col12Id").value = "6";
      document.getElementById("col13Id").value = "5";
      document.getElementById("col14Id").value = "3";
      document.getElementById("col15Id").value = "5";
      document.getElementById("col16Id").value = "8";
      document.getElementById("col17Id").value = "9";
      document.getElementById("col18Id").value = "7";
      document.getElementById("col19Id").value = "9";
      document.getElementById("col20Id").value = "3";
      document.getElementById("col21Id").value = "2";
      document.getElementById("col22Id").value = "3";
      document.getElementById("col23Id").value = "8";
      document.getElementById("col24Id").value = "4";
      document.getElementById("col25Id").value = "6";
      document.getElementById("col26Id").value = "2";
      document.getElementById("col27Id").value = "6";
      document.getElementById("col28Id").value = "4";
      document.getElementById("col29Id").value = "3";
      document.getElementById("col30Id").value = "3";
      document.getElementById("col31Id").value = "8";
      document.getElementById("col32Id").value = "3";
      document.getElementById("col33Id").value = "2";
      document.getElementById("col34Id").value = "7";
      document.getElementById("col35Id").value = "9";
      document.getElementById("col36Id").value = "5";
      document.getElementById("col37Id").value = "0";
      document.getElementById("col38Id").value = "2";
      document.getElementById("col39Id").value = "8";
      document.getElementById("col40Id").value = "8";
      document.getElementById("col41Id").value = "4";
      document.getElementById("col42Id").value = "1";
      document.getElementById("col43Id").value = "9";
      document.getElementById("col44Id").value = "7";
      document.getElementById("col45Id").value = "1";
      document.getElementById("col46Id").value = "6";
      document.getElementById("col47Id").value = "9";
      document.getElementById("col48Id").value = "3";
      document.getElementById("col49Id").value = "9";
      document.getElementById("col50Id").value = "9";
      document.getElementById("col51Id").value = "3";
      document.getElementById("col52Id").value = "7";
      document.getElementById("col53Id").value = "5";
      document.getElementById("col54Id").value = "1";
      document.getElementById("col55Id").value = "0";
      document.getElementById("col56Id").value = "5";
      document.getElementById("col57Id").value = "8";
      document.getElementById("col58Id").value = "2";
      document.getElementById("col59Id").value = "0";
      document.getElementById("col60Id").value = "9";
      document.getElementById("col61Id").value = "7";
      document.getElementById("col62Id").value = "4";
      document.getElementById("col63Id").value = "9";
      document.getElementById("col64Id").value = "4";
      document.getElementById("col65Id").value = "4";
      document.getElementById("col66Id").value = "5";
      document.getElementById("col67Id").value = "9";
      document.getElementById("col68Id").value = "2";
      document.getElementById("col69Id").value = "3";
      document.getElementById("col70Id").value = "0";
      document.getElementById("col71Id").value = "7";
      document.getElementById("col72Id").value = "8";
      document.getElementById("col73Id").value = "1";
      document.getElementById("col74Id").value = "6";
      document.getElementById("col75Id").value = "4";
      document.getElementById("col76Id").value = "0";
      document.getElementById("col77Id").value = "6";
      document.getElementById("col78Id").value = "2";
      document.getElementById("col79Id").value = "8";
      document.getElementById("col80Id").value = "6";
      document.getElementById("col81Id").value = "2";
      document.getElementById("col82Id").value = "0";
      document.getElementById("col83Id").value = "8";
      document.getElementById("col84Id").value = "9";
      document.getElementById("col85Id").value = "9";
      document.getElementById("col86Id").value = "8";
      document.getElementById("col87Id").value = "6";
      document.getElementById("col88Id").value = "2";
      document.getElementById("col89Id").value = "8";
      document.getElementById("col90Id").value = "0";
      document.getElementById("col91Id").value = "3";
      document.getElementById("col92Id").value = "4";
      document.getElementById("col93Id").value = "8";
      document.getElementById("col94Id").value = "2";
      document.getElementById("col95Id").value = "5";
      document.getElementById("col96Id").value = "3";
      document.getElementById("col97Id").value = "4";
      document.getElementById("col98Id").value = "2";
      document.getElementById("col99Id").value = "1";
      document.getElementById("col100Id").value = "1";
      document.getElementById("col101Id").value = "7";
      document.getElementById("col102Id").value = "0";
      document.getElementById("col103Id").value = "6";
      document.getElementById("col104Id").value = "7";
      document.getElementById("col105Id").value = "";
      document.getElementById("col106Id").value = "";
      document.getElementById("col107Id").value = "";
      document.getElementById("col108Id").value = "";
      document.getElementById("col109Id").value = "";
      document.getElementById("col110Id").value = "";

      colNum = colNum + 1;

    } else {
      clickMissCount = clickMissCount + 1;

      document.getElementById("clickMissId").innerHTML = clickMiss18p();
      function clickMiss18p() {
          cm18 = "クリックミス:" + clickMissCount + "回"
          return cm18;
      }
    }

      /* 経過時間の表示 */
      piStop = new Date();  // 経過時間を退避
      piTime = piStop.getTime() - piStart.getTime();     // 通算ミリ秒計算
          piH = Math.floor(piTime/(60*60*1000));         // '時間'取得
          piTime = piTime - (piH*60*60*1000);
          piM = Math.floor(piTime/(60*1000));            // '分'取得
          piTime = piTime - (piM*60*1000);
          piS = Math.floor(piTime/1000);                 // '秒'取得
          piMS = piTime%1000;                            // 'ミリ秒'取得

      document.getElementById("elapsedTimeId").innerHTML = elapsedTime18p();
      function elapsedTime18p() {
          et18 = "タイム:" + piM + "分" + piS + "秒" + piMS;
          return et18;
      }

      /* スコアの表示 */
      resultedScore = piM * 60 + piS + clickMissCount + piMS / 1000;

      document.getElementById("scoreId").innerHTML = resultedScore18p();
      function resultedScore18p() {
        rs18 = "スコア:" + resultedScore;
        return rs18;
      }

}
