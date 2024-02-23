import React from "react";
import { styled } from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinkContainer>
          <FooterLinkContent>
            <FooterLink href="https://help.netflix.com/ko/node/412">
              자주 묻는 질문
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko">
              고객 센터
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">계정</FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              미디어 센터
            </FooterLink>
          </FooterLinkContent>
          <FooterLinkContent>
            <FooterLink href="https://help.netflix.com/ko/node/412">
              투자 정보(IR)
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko">
              입사 정보
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              넷플릭스 지원 디바이스
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              이용 약관
            </FooterLink>
          </FooterLinkContent>
          <FooterLinkContent>
            <FooterLink href="https://help.netflix.com/ko/node/412">
              개인정보 처리방침
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko">
              쿠키 설정
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              회사 정보
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              문의하기
            </FooterLink>
          </FooterLinkContent>
        </FooterLinkContainer>
        <FooterInfoContainer>
          <FooterInfoTitle>넷플릭스 대한민국</FooterInfoTitle>
          <FooterInfo>
            넷플릭스서비시스코리아 유한회사 <br />
            통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587{" "}
            <br />
            대표: 레지널드 숀 톰프슨 <br />
            이메일 주소: korea@netflix.com <br />
            주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층
            우편번호 03161 <br />
            사업자등록번호: 165-87-00119 <br />
            클라우드 호스팅: Amazon Web Services Inc. <br />
            공정거래위원회 웹사이트
          </FooterInfo>
        </FooterInfoContainer>
      </FooterContent>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  margin-top: 80px;
  padding: 50px 4%;
`;
const FooterContent = styled.div``;
const FooterLinkContainer = styled.div`
  margin-bottom: 30px;
`;
const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const FooterLink = styled.a`
  width: 25%;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  text-decoration: underline;
`;
const FooterInfoContainer = styled.div``;
const FooterInfoTitle = styled.h2`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;
const FooterInfo = styled.p`
  color: rgba(255, 255, 255, 0.7);
`;
