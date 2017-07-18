import React, { PropTypes } from 'react';
import ImageMapper from 'react-image-mapper';
import StoreProvider from 'injection/StoreProvider';
import { LinkContainer } from 'react-router-bootstrap';
import Routes from 'routing/Routes';
import CombinedProvider from 'injection/CombinedProvider';
const { StreamsStore } = CombinedProvider.get('Streams');
const DashboardsStore = StoreProvider.getStore('Dashboards');
import { DocumentTitle, Spinner } from 'components/common';
import { MalformedSearchQuery, SearchExecutionError, SearchResult } from 'components/search';
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button,Row, Col } from 'reactstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid,Thumbnail } from 'react-bootstrap';
const col={backgroundColor : '#F16E10'}

const HomePage = React.createClass({
  getInitialState() {
    return {
      streams : "",
      dashboards: DashboardsStore.dashboards,
      numberFavoris : undefined,
      src0 : require('images/addFav.png'),
      src1 : require('images/addFav.png'),
      src2 : require('images/addFav.png'),
      src3 : require('images/addFav.png'),
      src4 : require('images/addFav.png'),
      src5 : require('images/addFav.png'),
      src6 : require('images/addFav.png'),
      src7 : require('images/addFav.png'),

    }
    this.handleMouseOver1=this.handleMouseOver1.bind(this);
    this.handleMouseOut1 = this.handleMouseOut1.bind(this);
    this.handleMouseOver0=this.handleMouseOver0.bind(this);
    this.handleMouseOut0 = this.handleMouseOut0.bind(this);
    this.handleMouseOver2=this.handleMouseOver2.bind(this);
    this.handleMouseOut2 = this.handleMouseOut2.bind(this);
    this.handleMouseOver3=this.handleMouseOver3.bind(this);
    this.handleMouseOut3 = this.handleMouseOut3.bind(this);
    this.handleMouseOver4=this.handleMouseOver4.bind(this);
    this.handleMouseOut4 = this.handleMouseOut4.bind(this);
    this.handleMouseOver5=this.handleMouseOver5.bind(this);
    this.handleMouseOut5 = this.handleMouseOut5.bind(this);
    this.handleMouseOver6=this.handleMouseOver6.bind(this);
    this.handleMouseOut6 = this.handleMouseOut6.bind(this);
    this.handleMouseOver7=this.handleMouseOver7.bind(this);
    this.handleMouseOut7 = this.handleMouseOut7.bind(this);
  },
  componentDidMount() {
    this.loadStreamsList()
  //  this.loadDashboardsList()
  },
  loadStreamsList() {

    StreamsStore.listStreams().then((response) => {

      this.setState({
        streams: response });
    })
  },
  loadDashboardsList() {
    console.log("loadDashboardsListloadDashboardsListloadDashboardsList")
    DashboardsStore.listDashboards().then(dashboards => this.setState({ dashboards: dashboards }));
    console.log("loadDashboardsListloadDashboardsListloadDashboardsList:  !!"+this.state.dashboards)

  },
  supp(idStream,data){

    if(idStream)
      StreamsStore.modif(idStream,data)
    this.loadStreamsList()

  },
  suppDash(dashboard){

    if(dashboard)
      DashboardsStore.removeFromFavoiteDash(dashboard)
    this.loadDashboardsList()

  },
  handleMouseOver0(){
    this.setState({
      src0 : require('images/stream.png')
    })
  },
  handleMouseOut0() {
    this.setState({
      src10: require('images/addFav.png')
    });
  },
  handleMouseOver1(){
    this.setState({
      src1 : require('images/stream.png')
    })
  },
  handleMouseOut1() {
    this.setState({
      src1 : require('images/addFav.png')
    });
  },
  handleMouseOver2(){
    this.setState({
      src2 : require('images/stream.png')
    })
  },
  handleMouseOut2() {
    this.setState({
      src2 : require('images/addFav.png')
    });
  },
  handleMouseOver3(){
    this.setState({
      src3: require('images/stream.png')
    })
  },
  handleMouseOut3() {
    this.setState({
      src3 : require('images/addFav.png')
    });
  },
  handleMouseOver4(){
    this.setState({
      src4 : require('images/stream.png')
    })
  },
  handleMouseOut4() {
    this.setState({
      src4 : require('images/addFav.png')
    });
  },
  handleMouseOver5(){
    this.setState({
      src5 : require('images/stream.png')
    })
  },
  handleMouseOut5() {
    this.setState({
      src5 : require('images/addFav.png')
    });
  },
  handleMouseOver6(){
    this.setState({
      src6 : require('images/stream.png')
    })
  },
  handleMouseOut6() {
    this.setState({
      src6 : require('images/addFav.png')
    });
  },
  handleMouseOver7(){
    this.setState({
      src7 : require('images/stream.png')
    })
  },
  handleMouseOut7() {
    this.setState({
      src7 : require('images/addFav.png')
    });
  },
  render() {
    // var MAP permet de diviser l'image en deux zones cliquables
    // var MAP est une propriété du composant ImageMapper
    var MAP0 = {
      name: 'my-map0',
      areas: [
        {shape: 'rect', coords: [0,0,292,103], href:'streams'},
        {shape: 'rect', coords: [0,103,292,205] ,href:'dashboards'},
      ]
    };
    var MAP1 = {
      name: 'my-map1',
      areas: [
        {shape: 'rect', coords: [0,0,292,103], href:'streams'},
        {shape: 'rect', coords: [0,103,292,205] ,href:'dashboards'},
      ]
    };
    var MAP2 = {
      name: 'my-map2',
      areas: [
        {shape: 'rect', coords: [0,0,292,103], href:'streams'},
        {shape: 'rect', coords: [0,103,292,205] ,href:'dashboards'},
      ]
    };
    var MAP3 = {
      name: 'my-map3',
      areas: [
        {shape: 'rect', coords: [0,0,292,103], href:'streams'},
        {shape: 'rect', coords: [0,103,292,205] ,href:'dashboards'},
      ]
    };
    var MAP4 = {
      name: 'my-map4',
      areas: [
        {shape: 'rect', coords: [0,0,292,103], href:'streams'},
        {shape: 'rect', coords: [0,103,292,205] ,href:'dashboards'},
      ]
    };
    var MAP5 = {
      name: 'my-map5',
      areas: [
        {shape: 'rect', coords: [0,0,292,103], href:'streams'},
        {shape: 'rect', coords: [0,103,292,205] ,href:'dashboards'},
      ]
    };
    var MAP6 = {
      name: 'my-map6',
      areas: [
        {shape: 'rect', coords: [0,0,292,103], href:'streams'},
        {shape: 'rect', coords: [0,103,292,205] ,href:'dashboards'},
      ]
    };
    var MAP7 = {
      name: 'my-map7',
      areas: [
        {shape: 'rect', coords: [0,0,292,103], href:'streams'},
        {shape: 'rect', coords: [0,103,292,205] ,href:'dashboards'},
      ]
    };
    var streams=this.state.streams
    var dashboards=this.state.dashboards
    var inc =0
    var dashFav=[{}]
    var dashboardsArray=dashboards.toArray();
    for(var i=0; i<dashboardsArray.length;i++){
      if(dashboardsArray[i].isFavoriteDash === true){
        dashFav[inc]=dashboardsArray[i]
        inc++
      }
    }

    var j=0
    var strFav=[{}]
    for(var i=0; i<streams.length;i++){
      if(streams[i].isFavoriteStream === true){
        strFav[j]=streams[i]
        j++

      }
    }
    var strFav = strFav.concat(dashFav)
    console.log(strFav.length +": LENGTH")
    var taille=8-strFav.length
    for(var i=0;i<taille;i++){
      strFav.push("vide")
    }

    console.log(strFav.length +": LENGTHafter")
    for(var i=0;i<strFav.length;i++){
console.log(JSON.stringify(strFav[i])+": NUMBER :"+i)
    }

    var fav0
    if(strFav[0].isFavoriteStream) {
      fav0 =
        <Col xs={1} md={1}>
          <LinkContainer to={Routes.stream_search(strFav[0].id)}>
            <a>{strFav[0].title}</a>
          </LinkContainer>
          <button onClick={this.supp.bind(this, strFav[0].id, {
            title: strFav[0].title,
            description: strFav[0].description,
            remove_matches_from_default_stream: strFav[0].remove_matches_from_default_stream,
            isFavoriteStream: strFav[0].isFavoriteStream,
            index_set_id: strFav[0].index_set_id,
          })}>
            Supprimer
          </button>
        </Col>
    }
      if(strFav[0].isFavoriteDash) {
        fav0 = <Col sm="3">
          <Card >
            <CardTitle>Dashboard</CardTitle>
            <LinkContainer to={Routes.dashboard_show(strFav[0].id)}>
              <a>{strFav[0].title}</a>
            </LinkContainer>
            <Button onClick={this.suppDash.bind(this, strFav[0])}>
              Supprimer
            </Button>
          </Card>
        </Col>
      }
    if(strFav[0]==='vide') {
      fav0 =
        <ImageMapper src={this.state.src0}
                     map={MAP0}
                     onMouseEnter={this.handleMouseOver0} onMouseLeave={this.handleMouseOut0}

        />
    }

    var fav1
    if(strFav[1].isFavoriteStream) {
      fav1 =
        <Card>
          <CardTitle>Application</CardTitle>
          <LinkContainer to={Routes.stream_search(strFav[1].id)}>
            <a>{strFav[1].title}</a>
          </LinkContainer>
          <Button onClick={this.supp.bind(this, strFav[1].id, {
            title: strFav[1].title,
            description: strFav[1].description,
            remove_matches_from_default_stream: strFav[1].remove_matches_from_default_stream,
            isFavoriteStream: strFav[1].isFavoriteStream,
            index_set_id: strFav[1].index_set_id,
          })}>
            Supprimer
          </Button>

        </Card>
    }

      if(strFav[1].isFavoriteDash) {
        fav1 = <Col sm="3">
          <Card >
            <CardTitle>Dashboard</CardTitle>
            <LinkContainer to={Routes.dashboard_show(strFav[1].id)}>
              <a>{strFav[1].title}</a>
            </LinkContainer>
            <Button onClick={this.suppDash.bind(this, strFav[1])}>
              Supprimer
            </Button>
          </Card>
        </Col>
      }

    if(strFav[1]==='vide') {
      fav1 =
        <ImageMapper src={this.state.src1}
                     map={MAP1}
                     onMouseEnter={this.handleMouseOver1} onMouseLeave={this.handleMouseOut1}

        />
    }

    ///////////////////////////////////////////
    var fav2
    if(strFav[2].isFavoriteStream)
    {fav2 =<Col sm="3">
        <Card >
          <CardTitle>Application</CardTitle>
          <LinkContainer to={Routes.stream_search(strFav[2].id)}>
            <a>{strFav[2].title}</a>
          </LinkContainer>
          <Button onClick={this.supp.bind(this,strFav[2].id,{
            title : strFav[2].title,
            description : strFav[2].description,
            remove_matches_from_default_stream :strFav[2].remove_matches_from_default_stream,
            isFavoriteStream : strFav[2].isFavoriteStream,
            index_set_id : strFav[2].index_set_id,
          })}>
            Supprimer
          </Button>
        </Card>
      </Col>}
      if(strFav[2].isFavoriteDash)
        fav2 =<Col sm="3">
          <Card >
            <CardTitle>Dashboard</CardTitle>
            <LinkContainer to={Routes.dashboard_show(strFav[2].id)}>
              <a>{strFav[2].title}</a>
            </LinkContainer>
            <Button onClick={this.suppDash.bind(this,strFav[2])}>
              Supprimer
            </Button>
          </Card>
        </Col>
    if(strFav[2]==='vide')
      fav2 =
          <ImageMapper src={this.state.src2}
                       map={MAP2}
                       onMouseEnter={this.handleMouseOver2} onMouseLeave={this.handleMouseOut2}

          />
    ///////////////////////////////////////////
    var fav3
    if(strFav[3])
    { fav3 =<Col sm="3">
        <Card block>
          <CardTitle>Application</CardTitle>
          <LinkContainer to={Routes.stream_search(strFav[3].id)}>
            <a>{strFav[3].title}</a>
          </LinkContainer>
          <Button onClick={this.supp.bind(this,strFav[3].id,{
            title : strFav[3].title,
            description : strFav[3].description,
            remove_matches_from_default_stream :strFav[3].remove_matches_from_default_stream,
            isFavoriteStream : strFav[3].isFavoriteStream,
            index_set_id : strFav[3].index_set_id,
          })}>
            Supprimer
          </Button>
        </Card>
      </Col>}

    if(strFav[3].isFavoriteDash)
      fav3 =<Col sm="3">
        <Card >
          <CardTitle>Dashboard</CardTitle>
          <LinkContainer to={Routes.dashboard_show(strFav[3].id)}>
            <a>{strFav[3].title}</a>
          </LinkContainer>
          <Button onClick={this.suppDash.bind(this,strFav[3])}>
            Supprimer
          </Button>
        </Card>
      </Col>
    if(strFav[3]==='vide')
      fav3 =
        <ImageMapper src={this.state.src3}
                     map={MAP3}
                     onMouseEnter={this.handleMouseOver3} onMouseLeave={this.handleMouseOut3}

        />

    ////////////////////////////////////////////////
    var fav4
    if(strFav[4])
      fav4 =<Col sm="3">
        <Card block>
          <CardTitle>Application</CardTitle>
          <LinkContainer to={Routes.stream_search(strFav[4].id)}>
            <a>{strFav[4].title}</a>
          </LinkContainer>
          <Button onClick={this.supp.bind(this,strFav[4].id,{
            title : strFav[4].title,
            description : strFav[1].description,
            remove_matches_from_default_stream :strFav[4].remove_matches_from_default_stream,
            isFavoriteStream : strFav[4].isFavoriteStream,
            index_set_id : strFav[4].index_set_id,
          })}>
            Supprimer
          </Button>
        </Card>
      </Col>

    if(strFav[4]==='vide')
      fav4 =
        <ImageMapper src={this.state.src4}
                     map={MAP4}
                     onMouseEnter={this.handleMouseOver4} onMouseLeave={this.handleMouseOut4}

        />
    if(strFav[4].isFavoriteDash)
      fav4 =<Col sm="3">
        <Card >
          <CardTitle>Dashboard</CardTitle>
          <LinkContainer to={Routes.dashboard_show(strFav[4].id)}>
            <a>{strFav[4].title}</a>
          </LinkContainer>
          <Button onClick={this.suppDash.bind(this,strFav[4])}>
            Supprimer
          </Button>
        </Card>
      </Col>


    ////////////////////////////////////////////////////////////////////////////////

    var fav5
    if(strFav[5])
    { fav5 =<Col sm="3">
        <Card block>
          <CardTitle>Application</CardTitle>
          <LinkContainer to={Routes.stream_search(strFav[5].id)}>
            <a>{strFav[1].title}</a>
          </LinkContainer>
          <Button onClick={this.supp.bind(this,strFav[5].id,{
            title : strFav[5].title,
            description : strFav[5].description,
            remove_matches_from_default_stream :strFav[5].remove_matches_from_default_stream,
            isFavoriteStream : strFav[5].isFavoriteStream,
            index_set_id : strFav[5].index_set_id,
          })}>
            Supprimer
          </Button>
        </Card>
      </Col>}
    if(strFav[5]==='vide')
      fav5 =
        <ImageMapper src={this.state.src5}
                     map={MAP5}
                     onMouseEnter={this.handleMouseOver5} onMouseLeave={this.handleMouseOut5}

        />

    if(strFav[5].isFavoriteDash)
      fav5 =<Col sm="3">
        <Card >
          <CardTitle>Dashboard</CardTitle>
          <LinkContainer to={Routes.dashboard_show(strFav[5].id)}>
            <a>{strFav[5].title}</a>
          </LinkContainer>
          <Button onClick={this.suppDash.bind(this,strFav[5])}>
            Supprimer
          </Button>
        </Card>
      </Col>
    ////////////////////////////////////////////////////////////////////////
    var fav6
    if(strFav[6])
      fav6 =<Col sm="3">
        <Card block>
          <CardTitle>Application</CardTitle>
          <LinkContainer to={Routes.stream_search(strFav[6].id)}>
            <a>{strFav[6].title}</a>
          </LinkContainer>
          <Button onClick={this.supp.bind(this,strFav[6].id,{
            title : strFav[6].title,
            description : strFav[6].description,
            remove_matches_from_default_stream :strFav[6].remove_matches_from_default_stream,
            isFavoriteStream : strFav[6].isFavoriteStream,
            index_set_id : strFav[6].index_set_id,
          })}>
            Supprimer
          </Button>
        </Card>
      </Col>
    if(strFav[6]==='vide')
      fav6 =
        <ImageMapper src={this.state.src6}
                     map={MAP6}
                     onMouseEnter={this.handleMouseOver6} onMouseLeave={this.handleMouseOut6}

        />

    if(strFav[6].isFavoriteDash)
      fav6 =<Col sm="3">
        <Card >
          <CardTitle>Dashboard</CardTitle>
          <LinkContainer to={Routes.dashboard_show(strFav[6].id)}>
            <a>{strFav[6].title}</a>
          </LinkContainer>
          <Button onClick={this.suppDash.bind(this,strFav[6])}>
            Supprimer
          </Button>
        </Card>
      </Col>
    ///////////////////////////////////////////////////////
    var fav7
    if(strFav[7])
      fav7 =<Col sm="3">
        <Card block>
          <CardTitle>Application</CardTitle>
          <LinkContainer to={Routes.stream_search(strFav[7].id)}>
            <a>{strFav[7].title}</a>
          </LinkContainer>
          <Button onClick={this.supp.bind(this,strFav[7].id,{
            title : strFav[7].title,
            description : strFav[1].description,
            remove_matches_from_default_stream :strFav[7].remove_matches_from_default_stream,
            isFavoriteStream : strFav[7].isFavoriteStream,
            index_set_id : strFav[7].index_set_id,
          })}>
            Supprimer
          </Button>
        </Card>
      </Col>
    if(strFav[7]==='vide')
      fav7 =
        <ImageMapper src={this.state.src7}
                     map={MAP7}
                     onMouseEnter={this.handleMouseOver7} onMouseLeave={this.handleMouseOut7}

        />

    if(strFav[7].isFavoriteDash)
      fav7 =<Col sm="3">
        <Card >
          <CardTitle>Dashboard</CardTitle>
          <LinkContainer to={Routes.dashboard_show(strFav[7].id)}>
            <a>{strFav[7].title}</a>
          </LinkContainer>
          <Button onClick={this.suppDash.bind(this,strFav[7])}>
            Supprimer
          </Button>
        </Card>
      </Col>



    return (
      <DocumentTitle title="Search">
        <div>
          <label htmlfor="name">Favorites Streams & Dashboards</label>

          <Grid>
            <Row>
              <Col  md={3} bsStyle=""  style={col} bsClass="col" >
                {fav0}
              </Col>
              <Col  md={3}>
                {fav1}
              </Col>
              <Col  md={3}>
                {fav2}
              </Col>
              <Col  md={3}>
                {fav3}
              </Col>
            </Row>
            <Row>
              <Col  md={3}>
                {fav4}
              </Col>
              <Col  md={3}>
                {fav5}
              </Col>
              <Col  md={3}>
                {fav6}
              </Col>
              <Col  md={3}>
                {fav7}
              </Col>
            </Row>

          </Grid>



        </div>

      </DocumentTitle>
    );

  },
});

export default HomePage;
