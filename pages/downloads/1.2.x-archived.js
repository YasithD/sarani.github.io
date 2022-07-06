import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from 'next-image-export-optimizer';

import Layout from '../../layouts/LayoutDownloads';
import { prefix } from '../../utils/prefix';
import archive from '../../_data/release_notes_versions.json';


export default function SwanLakeArchived() {

    return (
        <Layout>

            <Col sm={12}>
                <Row classNameName="cDownloadsHeader pageHeader pageContentRow">
                    <Col xs={12}>
                        <h1>1.2.x Archived Versions</h1>
                    </Col>
                </Row>

                <Row classNameName="pageHeader pageContentRow">
                    <Col xs={12}>


                        {archive.reverse().map((item, index) => (
                            <div className="installers" key={item.version}>
                                <h3 className="releaseVersion" id={item.version}>{item.version} ({item['release-date']})</h3>
                                <Row className="releasesRow">
                                    <Col xs={12} md={6} lg={6} className="leftTable">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td >{item['linux-installer']}</td>
                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}`}
                                                        name={item['linux-installer']} data-pack={item['linux-installer']} target="">
                                                        <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['linux-installer']} />
                                                    </a>
                                                    </td>
                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}.md5`}>md5</a></td>
                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}.sha1`}>SHA-1</a></td>
                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['linux-installer']}.asc`}>asc</a></td>
                                                </tr>
                                                <tr>
                                                    <td >{item['windows-installer']}</td>
                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}`}
                                                        name={item['windows-installer']} data-pack={item['windows-installer']} target="">
                                                        <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['windows-installer']} />
                                                    </a>
                                                    </td>
                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}.md5`}>md5</a></td>
                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}.sha1`}>SHA-1</a></td>
                                                    <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['windows-installer']}.asc`}>asc</a></td>
                                                </tr>

                                                {
                                                    (item['other-artefacts'].length > 1) ?
                                                        <tr>
                                                            <td >{item['macos-installer']}</td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}`}
                                                                name={item['macos-installer']} data-pack={item['macos-installer']} target="">
                                                                <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['macos-installer']} />
                                                            </a>
                                                            </td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.md5`}>md5</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.sha1`}>SHA-1</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.asc`}>asc</a></td>
                                                        </tr>
                                                        : null

                                                }
                                            </tbody></table>

                                    </Col>
                                    <Col xs={12} md={6} lg={6} className="rightTable">
                                        <table>
                                            <tbody>
                                                {
                                                    (item['other-artefacts'].length <= 1) ?
                                                        <tr>
                                                            <td >{item['macos-installer']}</td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}`}
                                                                name={item['macos-installer']} data-pack={item['macos-installer']} target="">
                                                                <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['macos-installer']} />
                                                            </a>
                                                            </td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.md5`}>md5</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.sha1`}>SHA-1</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['macos-installer']}.asc`}>asc</a></td>
                                                        </tr>
                                                        : null
                                                }

                                                {
                                                    (item['other-artefacts'].length > 1) ?
                                                        item['other-artefacts'].map((ot, index) => (
                                                            <tr key={ot}>
                                                                <td >{ot}</td>
                                                                <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}`}
                                                                    name={ot} data-pack={ot} target="">
                                                                    <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={ot} />
                                                                </a>
                                                                </td>
                                                                <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}.md5`}>md5</a></td>
                                                                <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}.sha1`}>SHA-1</a></td>
                                                                <td><a href={`${process.env.distServer}/downloads/${item.version}/${ot}.asc`}>asc</a></td>
                                                            </tr>
                                                        ))
                                                        :
                                                        <tr>
                                                            <td >{item['other-artefacts']}</td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['other-artefacts']}`}
                                                                name={item['other-artefacts']} data-pack={item['other-artefacts']} target="">
                                                                <Image src={`${prefix}/images/download-bg-green-fill.svg`} width={13} height={13} alt={item['other-artefacts']} />
                                                            </a>
                                                            </td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['other-artefacts']}.md5`}>md5</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['other-artefacts']}.sha1`}>SHA-1</a></td>
                                                            <td><a href={`${process.env.distServer}/downloads/${item.version}/${item['other-artefacts']}.asc`}>asc</a></td>
                                                        </tr>

                                                }
                                            </tbody></table>
                                    </Col>
                                </Row>
                                <div className="archivedReleaseNotes">
                                    <a className="archivedReleaseNotesLink" id={`${item.version}notes`} href={`${prefix}/downloads/swan-lake-release-notes/swan-lake-${item.version}`}>RELEASE NOTES</a>
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Col>
        </Layout>

    );
}
