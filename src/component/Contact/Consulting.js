import "./Consulting.css";
import amazon from "./amazon/amazon.png";
import 고객이탈예측1 from "./amazon/amazon_고객이탈예측/고객이탈예측1.png";
import 고객이탈예측2 from "./amazon/amazon_고객이탈예측/고객이탈예측2.png";
import 고객이탈예측3_1 from "./amazon/amazon_고객이탈예측/고객이탈예측3-1.png";
import 고객이탈예측3_2 from "./amazon/amazon_고객이탈예측/고객이탈예측3-2.png";
import 고객이탈예측4 from "./amazon/amazon_고객이탈예측/고객이탈예측4.png";
import buy_prediction1 from "./amazon/amazon_구매카테고리예측/buy_predict1.json";
import buy_prediction2 from "./amazon/amazon_구매카테고리예측/buy_predict2.json";
import just1 from "./amazon/amazon_구매카테고리예측/just1.json";
import just2 from "./amazon/amazon_구매카테고리예측/just2.json";
import 구매예측4 from "./amazon/amazon_구매카테고리예측/구매예측4.png";
import segmentation1 from "./amazon/amazon_고객세분화/customer_segmentation1.json";
import segmentation2 from "./amazon/amazon_고객세분화/customer_segmentation2.json";
import segmentation3 from "./amazon/amazon_고객세분화/customer_segmentation3.json";
import createPlotlyComponent from "react-plotly.js/factory";
import Plot from "react-plotly.js";

const Consulting = () => {
  return (
    <body className="consulting">
      <div className="about_main">
        <h1 className="consulting_main_title">Cousultings</h1>
        <div className="consulting_title">아마존 소비자 행동 분석</div>
        <br />
        <h1>아마존 소비자의 설문을 받은 데이터를 사용하여 기존 아마존 시스템의 문제점과 비즈니스전략을 도출하기로 하였다.</h1>
        <div className="consulting_title">
          고객 이탈 예측
          <img src={amazon} className="amazon_1" alt="amazon"></img>
        </div>
        
        <div className="consulting_box_2">
          <h3>고객의 구매 패턴, 브라우징 빈도, 리뷰 남김 여부 등의 정보를 활용하여 고객 이탈을 예측하는 모델 
          이를 통해 이탈할 가능성이 높은 고객에게 특별한 제안을 보내거나 개인화된 경험을 제공하여 이탈을 방지할 수 있습니다.</h3>
          <img src={고객이탈예측1} alt="고객이탈예측1"></img>
          <h3>분석을 통해 웹 브라우징 빈도가 고객 이탈률을 계산하는데 있어서 중요한 경향이 있는 것을 알 수 있었다.</h3>
          <img src={고객이탈예측2} alt="고객이탈예측2"></img>
          <br />
          <h3>브라우징 빈도가 낮은 고객의 이탈률이 높다. </h3>
          <img src={고객이탈예측3_1} alt="고객이탈예측3-1"></img>
          <br />
          <img src={고객이탈예측3_2} alt="고객이탈예측3-2"></img>
          <br />
          <h2>이탈률이 높은 특성은? </h2>
          <h3>분산 분석 결과(ANOVA) 
          브라우징 빈도, 성별, 개인화된 추천 빈도, 제품 검색 방법, 장바구니에 추가 등의 특성이 
          이탈률을 분류하는데 적합함을 확인하였다.</h3>
          <img src={고객이탈예측4} alt="고객이탈예측4"></img>
          <h3>
          서포트 벡터 머신 평가
          - 153 (True Negative): 실제로는 이탈하지 않은 고객을 모델이 이탈하지 않는다고 정확하게 예측한 경우
          - 3 (False Positive): 실제로는 이탈하지 않은 고객을 모델이 이탈한다고 잘못 예측한 경우
          - 12 (False Negative): 실제로는 이탈한 고객을 모델이 이탈하지 않는다고 잘못 예측한 경우
          - 148 (True Positive): 실제로 이탈한 고객을 모델이 이탈한다고 정확하게 예측한 경우
        </h3>
        <br></br>
        <h3>
        - 정확도(Accuracy): 95.89%
        - 정밀도(Precision): 99.33%
        - 재현율(Recall): 92.50%
        - F1 점수(F1 Score): 95.79%
        - ROC AUC 점수:97.8%
        </h3>
        </div>
        <div className="consulting_title">
          구매 카테고리 예측
          <img src={amazon} className="amazon_2" alt="amazon"></img>
        </div>
        <div className="consulting_box_2"></div>
        <h3>고객의 성별, 연령, 검색 방법, 구매 빈도 등의 정보를 바탕으로 특정 제품을 구매할 확률을 예측하는 모델을 만들 수 있습니다. 
          이를 통해 고객에게 가장 관련성이 높은 제품을 추천하거나 개인화된 마케팅 메시지를 제공할 수 있습니다.</h3>
        <Plot // buy_prediction1
          data={buy_prediction1.data}
          layout={buy_prediction1.layout}
          config={{ responsive: true }}
        />
        <h3>카테고리에 따른 현재 구매빈도를 보면 옷이 구매횟수가 제일 많고 그 다음이 뷰티용품인 것으로 판단된다. 
          아마도 아마존의 주 고객이 20대 중후반 여성이 많은 것과 밀접한 관련이 있는 듯하다.</h3>
        <Plot // buy_prediction2
          data={buy_prediction2.data}
          layout={buy_prediction2.layout}
          config={{ responsive: true }}
        />
        <h3>식료품과 음식 카테고리에 중요한 특성 값들은 쇼핑 만족도,나이,리뷰 중요도 등이 있다.</h3>
        <Plot // just1
          data={just1.data}
          layout={just1.layout}
          config={{ responsive: true }}
        />
        <h3></h3>
        <Plot // just2
          data={just2.data}
          layout={just2.layout}
          config={{ responsive: true }}
        />
        <h3>
        서비스평가<br></br>
        1위:제품 추천<br></br>
        2위:경쟁력 있는 가격<br></br>
        3위:다양한 제품 선택<br></br>
        4위:사용자 친화적인 인터페이스
        </h3>
        <img
          className="buy_prediction_img"
          src={구매예측4}
          alt="구매예측4"
        ></img>
        <h3>최종적으로 랜덤 포레스트모델로 f1 score 55%의 모델이 선정되었다. 
        이는 다중 레이블 분류에서 고객이 여러카테고리를 중복선택했을 때의 경우도 계산하기 때문에
        정확도가 나쁘지 않다고 판단하였다. 
        </h3>
        <div className="consulting_title">
          고객 세분화
          <img src={amazon} className="amazon_3" alt="amazon"></img>
        </div>
        <div className="consulting_box_2"></div>
        <h3>고객 세분화는 고객을 공통된 특성을 공유하는 그룹으로 분류하는 것입니다. 
          이 데이터셋을 활용하면, 고객의 구매 패턴, 제품 검색 방법, 리뷰 남김 여부, 
          '나중에 저장하기' 기능 사용 빈도 등을 바탕으로 고객을 여러 그룹으로 분류할 수 있습니다. 
          이런 세분화는 마케팅 전략을 개발하거나 개인화된 경험을 제공하는 데 유용합니다.
        </h3>
        <Plot // customer_segmentation2
          data={segmentation2.data}
          layout={segmentation2.layout}
          config={{ responsive: true }}
        />
        <h3>
        여러가지 특성을 기반으로 고객을 4그룹으로 세분화 하기로하였다. 
        고객들을 세분화 한 특성을 차원 축소하여 보기 편하게 만들었다. 
        위 그래프를 볼 때 고객들이 잘 세분화되어 나누어져 있는 것을 화인할 수 있었다.
        </h3>
        <Plot // customer_segmentation1
          data={segmentation1.data}
          layout={segmentation1.layout}
          config={{ responsive: true }}
        />
        <h3>
        - 클러스터 0: 개인화된 추천 빈도가 높고, 브라우징 빈도는 낮은 편이다.<br></br>
        - 클러스터 1: 나이가 가장 어리고 고객 리뷰를 중요하게 생각하지않는다.<br></br>
        - 클러스터 2: 브라우징 빈도가 가장 높으며, 고객 리뷰를 중요하게 생각하며 개인화된 추천 빈도와 장바구니 완성 빈도는 낮다,제품을 검색할때 주로 다른 방법(other)으로 검색한다.<br></br>
        - 클러스터 3: 나이가 가장 높으며, 개인화된 추천 빈도와 브라우징 빈도가 낮고,장바구니 사용빈도가 낮음
        </h3>
        <Plot // customer_segmentation3
          data={segmentation3.data}
          layout={segmentation3.layout}
          config={{ responsive: true }}
        />
        <h3>
        2번 고객이 다른 고객들에 비해 제품을 고를 때 키워드,태그와 다른 방법을 사용한 경우가 많았다.
        이와 같이 클러스터링을 사용할 때 영향력이 높은 특성들을 시각화 해서 판별하였다.
        </h3>
        <br></br>
        <h3>
        위와 같은 분석을 통해
        <br></br> 
        클러스터 0

        - 타겟 고객: 나이가 평균에 가까운, 유저 친화적인 웹사이트/앱 인터페이스를 선호하는 고객
        - 마케팅 전략: 웹사이트나 앱의 사용 편의성을 강조하는 캠페인
        - 제품 추천: 추천 빈도가 높은 제품을 중심으로 추천
        <br></br>
        <br></br>
        클러스터 1

        - 타겟 고객: 젊은 여성, 키워드 검색을 선호하는 고객
        - 마케팅 전략: 젊은 여성을 대상으로 한 패션 제품 광고, 검색 엔진 최적화
        - 제품 추천: 유행하는 패션 아이템, 키워드 검색을 통해 찾을 수 있는 제품
        <br></br>
        <br></br>
        클러스터 2

        - 타겟 고객: 브라우징 빈도가 높은 남성 고객
        - 마케팅 전략: 남성을 대상으로 한 스포츠나 기술 제품 홍보
        - 제품 추천: 남성이 선호하는 카테고리나 브랜드 제품
        <br></br>
        <br></br>
        클러스터 3

        - 타겟 고객: 나이가 높고, 브라우징 빈도가 낮은 고객
        - 마케팅 전략: 나이가 높은 고객층을 대상으로 한 건강, 생활 편의 제품 홍보
        - 제품 추천: 필터 검색을 통해 손쉽게 찾을 수 있는 건강 보조제나 생활용품

      이런 결론을 도출하였다.  
        </h3>
      </div>
      <div className="consulting_title">결론 : 비즈니스 제안</div>
      <br />
      <h3>
      Amazon 고객의 주 연령층은 20대 중후반 여성이고, 자주 브라우징하고 구매하는 경향이 있습니다.
      또한, 검색 엔진을 통해 제품을 찾는 것을 선호하며, 제품 리뷰를 남기는 사람들이 많습니다. 
      '나중에 저장하기' 기능은 상대적으로 덜 사용됩니다.
      </h3>
    </body>
  );
};

export default Consulting;
