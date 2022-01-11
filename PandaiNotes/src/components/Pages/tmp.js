import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';
import axios from 'axios';
import moment from 'moment';
import DatePicker from "react-datepicker";
import { Grid, Row, Col, Button } from "react-bootstrap";
import LoadingBar from "react-top-loading-bar";
import { Card } from "components/Card/Card.jsx";
import env from "../../config.js";

class DataPenyakit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      startDate: new Date(),
      loadingBarProgress: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  add = value => {
    this.setState({
      loadingBarProgress: this.state.loadingBarProgress + value
    })
  }

  complete = () => {
    this.setState({ loadingBarProgress: 100 })
  }

  onLoaderFinished = () => {
    this.setState({ loadingBarProgress: 0 })
  }

  handleSubmit(e) {
    e.preventDefault();
    let main = this.state.startDate
    var format = 'MM/YYYY';
    var month = moment(main).format(format); 
    
    this.getChartDataByMonth(month);

  }

  componentDidMount(){
    this.getChartData();
  }

  getChartDataByMonth(month){
    // alert(month);
    var config = {
        headers: {
          'Authorization': "Bearer " + localStorage.id_token
        }
    };
    this.add(70);
    axios
      .get(env.api_base_url+"grafik/penyakit/"+month+"", config)
      .then(response => {
          this.complete();
          const rawatinap = response.data.results.rawatinap;
          const rawatjalan = response.data.results.rawatjalan;
          const igd = response.data.results.igd;

          let nama_penyakit = [];
          let jumlah = [];

          let rj_nm_penyakit = [];
          let rj_jumlah = [];

          let igd_nm_penyakit = [];
          let igd_jumlah = [];

          rawatinap.forEach(element => {
            nama_penyakit.push(element.nm_penyakit);
            jumlah.push(element.jumlah);
          });

          rawatjalan.forEach(element => {
            rj_nm_penyakit.push(element.nm_penyakit);
            rj_jumlah.push(element.jumlah);
          });

          igd.forEach(element => {
            igd_nm_penyakit.push(element.nm_penyakit);
            igd_jumlah.push(element.jumlah);
          });

          // console.log(jumlah);
          this.setState({ 
            chartData: {
              labels: nama_penyakit,
              datasets:[
                 {
                    label:'Rawat inap',
                    data: jumlah ,
                    backgroundColor:[
                     'rgba(255,105,145,0.6)',
                     'rgba(155,100,210,0.6)',
                     'rgba(90,178,255,0.6)',
                     'rgba(240,134,67,0.6)',
                     'rgba(120,120,120,0.6)',
                     'rgba(250,55,197,0.6)'
                    ]                    
                 }
              ]
           },
           chartRawatJalan: {
            labels: rj_nm_penyakit,
              datasets:[
                 {
                    label:'Rawat jalan',
                    data: rj_jumlah ,
                    backgroundColor:[
                     'rgba(255,105,145,0.6)',
                     'rgba(155,100,210,0.6)',
                     'rgba(90,178,255,0.6)',
                     'rgba(240,134,67,0.6)',
                     'rgba(120,120,120,0.6)',
                     'rgba(250,55,197,0.6)'
                    ]                    
                 }
              ]
           },
           chartIgd: {
            labels: igd_nm_penyakit,
              datasets:[
                 {
                    label:'IGD',
                    data: igd_jumlah ,
                    backgroundColor:[
                     'rgba(255,105,145,0.6)',
                     'rgba(155,100,210,0.6)',
                     'rgba(90,178,255,0.6)',
                     'rgba(240,134,67,0.6)',
                     'rgba(120,120,120,0.6)',
                     'rgba(250,55,197,0.6)'
                    ]                    
                 }
              ]
           }
           });
      }
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  getChartData(){
    var config = {
        headers: {
          'Authorization': "Bearer " + localStorage.id_token
        }
    };
    this.add(70);
    axios
      .get(env.api_base_url+"grafik/penyakit/01/2019", config)
      .then(response => {
          this.complete();
          const rawatinap = response.data.results.rawatinap;
          const rawatjalan = response.data.results.rawatjalan;
          const igd = response.data.results.igd;

          let nama_penyakit = [];
          let jumlah = [];

          let rj_nm_penyakit = [];
          let rj_jumlah = [];

          let igd_nm_penyakit = [];
          let igd_jumlah = [];

          rawatinap.forEach(element => {
            nama_penyakit.push(element.nm_penyakit);
            jumlah.push(element.jumlah);
          });

          rawatjalan.forEach(element => {
            rj_nm_penyakit.push(element.nm_penyakit);
            rj_jumlah.push(element.jumlah);
          });

          igd.forEach(element => {
            igd_nm_penyakit.push(element.nm_penyakit);
            igd_jumlah.push(element.jumlah);
          });

          // console.log(jumlah);
          this.setState({ 
            chartData: {
              labels: nama_penyakit,
              datasets:[
                 {
                    label:'Rawat inap',
                    data: jumlah ,
                    backgroundColor:[
                     'rgba(255,105,145,0.6)',
                     'rgba(155,100,210,0.6)',
                     'rgba(90,178,255,0.6)',
                     'rgba(240,134,67,0.6)',
                     'rgba(120,120,120,0.6)',
                     'rgba(250,55,197,0.6)'
                    ]                    
                 }
              ]
           },
           chartRawatJalan: {
            labels: rj_nm_penyakit,
              datasets:[
                 {
                    label:'Rawat jalan',
                    data: rj_jumlah ,
                    backgroundColor:[
                     'rgba(255,105,145,0.6)',
                     'rgba(155,100,210,0.6)',
                     'rgba(90,178,255,0.6)',
                     'rgba(240,134,67,0.6)',
                     'rgba(120,120,120,0.6)',
                     'rgba(250,55,197,0.6)'
                    ]                    
                 }
              ]
           },
           chartIgd: {
            labels: igd_nm_penyakit,
              datasets:[
                 {
                    label:'IGD',
                    data: igd_jumlah ,
                    backgroundColor:[
                     'rgba(255,105,145,0.6)',
                     'rgba(155,100,210,0.6)',
                     'rgba(90,178,255,0.6)',
                     'rgba(240,134,67,0.6)',
                     'rgba(120,120,120,0.6)',
                     'rgba(250,55,197,0.6)'
                    ]                    
                 }
              ]
           }
           });
      }
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }
  
  render() {    
    const bar = this.state.chartData;
    const bar2 = this.state.chartRawatJalan;
    const bar3 = this.state.chartIgd;

    return (
      <div className="content">
        <LoadingBar
          progress={this.state.loadingBarProgress}
          height={2}
          color="red"
          onLoaderFinished={() => this.onLoaderFinished()}
        /> 
        <Grid fluid>         
          <Row>
            <Col md={12}>
              <DatePicker
                className="form-control"
                selected={this.state.startDate}
                onChange={this.handleChange}
                dateFormat="MM/yyyy" 
                showMonthYearPicker
              />
              <Button variant="success" onClick={this.handleSubmit}><i class="fa fa-search"></i> Search</Button>
            </Col>
            <Col md={12}>
              <Card
                id="chartActivity"
                title="Grafik (Rawat inap)"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <Bar
                      data={bar}
                      width={100}
                      height={50}
                      options={{
                        maintainAspectRatio: false
                      }}
                    />
                  </div>
                }
              />
            </Col>
            <Col md={12}>
              <Card
                id="chartActivity"
                title="Grafik (Rawat jalan)"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <Bar
                      data={bar2}
                      width={100}
                      height={50}
                      options={{
                        maintainAspectRatio: false
                      }}
                    />
                  </div>
                }
              />
            </Col>
            <Col md={12}>
              <Card
                id="chartActivity"
                title="Grafik (IGD)"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <Bar
                      data={bar3}
                      width={100}
                      height={50}
                      options={{
                        maintainAspectRatio: false
                      }}
                    />
                  </div>
                }
              />
            </Col>