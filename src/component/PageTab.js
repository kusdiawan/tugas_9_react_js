import React from 'react';
import { Tab, Tabs, Table, ProgressBar } from 'react-bootstrap';

function PageTab(){
	return(
		<>
		<Tabs defaultActiveKey="allTransfer">
                    <Tab eventKey="allTransfer" title="Semua Transfer">
                      <Table> 
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Nama Pemain</th>
                              <th>Tim</th>
                              <th>Transfer</th>
                              <th>Proses Transfer</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td align="left">MAROUNE FELAINI</td>
                              <td align="left">MANCHESTER UNITED</td>
                              <td align="left">SHENDONG LUNENG</td>
                              <td align="left"><ProgressBar now={85} label="85%" variant="primary" animated stripped /></td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td align="left">LUIS NANI</td>
                              <td align="left">SPORTING CP</td>
                              <td align="left">ORLANDO CITY</td>
                              <td><ProgressBar now={55} label="55%" variant="primary" animated stripped /></td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td align="left">MAREK HAMSIK</td>
                              <td align="left">NAPOLI</td>
                              <td align="left">DALIAN YIEFANG</td>
                              <td><ProgressBar now={95} label="95%" variant="primary" animated stripped /></td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td align="left">SARDAR AZMOUNT</td>
                              <td align="left">RUBIN KAZAN</td>
                              <td align="left">ZENIT ST.PETERSBURG</td>
                              <td><ProgressBar now={100} label="100%" variant="primary" animated stripped /></td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td align="left">MITCH BATSHUAYI</td>
                              <td align="left">CHELSEA </td>
                              <td align="left">CRYSTAL PALACE</td>
                              <td><ProgressBar now={50} label="50%" variant="primary" animated stripped /></td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td align="left">LUCAS PIAZON</td>
                              <td align="left">CHELSEA</td>
                              <td align="left">CHIEVO</td>
                              <td><ProgressBar now={100} label="100%" variant="primary" animated stripped /></td>
                            </tr>
                          </tbody>
                      </Table>
                    </Tab>
                    <Tab eventKey="ligaInggris" title="Liga Primer Inggris"></Tab>
                    <Tab eventKey="serieA" title="Serie A"></Tab>
                    <Tab eventKey="divisiPrimera" title="Divisi Primera"></Tab>
                    <Tab eventKey="Bundes Liga" title="Bundesliga"></Tab>
                    <Tab eventKey="ligaindonesa" title="Liga 1 Indonesia"></Tab>
                  </Tabs>
		</>
		)
}

export default PageTab;