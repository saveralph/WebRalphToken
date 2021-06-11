import React from 'react';
import { connect } from 'react-redux';
import Bg from '../../Assets/images/bg.jpg';
// import PDFViewer from 'pdf-viewer-reactjs'
import PDFViewer from 'mgr-pdf-viewer-react';
// import { Document, Page } from 'react-pdf';
import esp from '../../Assets/whitepaperesp.pdf'
import eng from '../../Assets/whitepapereng.pdf'
function WhitePaper(props) {
    const { locale } = props;
    console.log(locale.locale.in8)
    return (
        <div class="section mcb-section" id="carrotPaper" style={{ paddingTop: 90, paddingBottom: 50 }}
            data-parallax="3d"><img class="mfn-parallax"
                src={Bg} alt="parallax background" />
            <div style={{ width: "100%", height: "100%", backgroundColor: "rgb(0, 0, 0,0.5)", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 1 }} />
            <div class="section_wrapper mcb-section-inner">
                <div class="wrap mcb-wrap one  valign-top clearfix">
                    <div class="mcb-wrap-inner text-center">
                        <h2 style={{ color: "#e7d600" }}>CARROT PAPER</h2>
                        <div class="mcb-column one-third column_column">
                            <PDFViewer document={{
                                file: locale.locale.in8 === "Español" ? esp : eng
                            }}
                                // scale={3}
                                scaleStep={11}
                                canvasCss="canvasStyle"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )


}
const MapStateToProps = (state) => {
    return { locale: state.locale }
}
export default connect(MapStateToProps)(WhitePaper);