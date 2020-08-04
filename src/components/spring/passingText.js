import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './passingText.css'
import Typist from 'react-typist';
import Title from '../../components/title.js';

const content = {
    text: [`PROJETOS que reflitam a personalidade do cliente, seus desejos, suas histórias, memórias afetivas e sonhos para o futuro. Unimos as particularidades do cliente à identidade arquitetônica contemporânea do escritório.`,
           `SOLUÇÕES únicas e criativas que garantam o melhor desempenho dos espaços – funcionalidade, otimização de recursos, fluxos,  percepção de conforto e bem estar aos usuários.`,
           `Relação próxima ao nosso cliente com confiabilidade e transparência no processo. PESSOALIDADE no atendimento.`,
           `Entrega de soluções COMPLETAS de arquitetura, desde a concepção criativa,  ao PLANEJAMENTO, à plena execução e entrega da obra.`,
           `GESTÃO SUSTENTÁVEL por meio da construção de relações de colaboração onde todos ganham -clientes, fornecedores e a sociedade em geral.`]
}

function AnimatedDivs (props) {
    return(
        <div className="d-flex flex-column negative-margin">
          <div className="card-text-number">
            {props.number}
          </div>
          {props.text && (
              <div style={{width: "500px"}} className="card-text">
                
                <Typist delay={1500} avgTypingDelay={20} blink={true}>
                    {props.text}
                </Typist>
              </div>
          )}
          
      </div>
    );
}

const pages = [
  ({ style }) => <animated.div style={{ ...style, border: '2px solid red' }}>
                     <AnimatedDivs number={"O que esperar de um projeto por Bianca Safidvash"} />
                 </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: '#303030' }}>
                    <AnimatedDivs number={1} text={content.text[0]} />
                </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: '#303030' }}>
                     <AnimatedDivs number={2} text={content.text[1]} />
                </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: '#303030' }}>
                    <AnimatedDivs number={3} text={content.text[2]} />
                 </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: '#303030' }}>
                    <AnimatedDivs number={4} text={content.text[3]} />
                 </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: '#303030' }}>
                    <AnimatedDivs number={5} text={content.text[4]} />
                 </animated.div>,
]

export default function PassingText() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 6), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(50%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(-50%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
  })
  return (
    <div name={"projeto"} className="passing-text-container" >
      <div className="simple-trans-main" onClick={onClick}>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item]
          return <Page key={key} style={props} />
        })}
      </div>
    </div>
  )
}
