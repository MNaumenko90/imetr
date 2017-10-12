/**
 * Created by aleksandr on 7/28/17.
 * moonion.com
 */

import React from 'react';


import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

import 'normalize.css';

const theme = (outerTheme) => {
    const typography = {
        fontFamily: `'Exo 2'`,
        fontSize: 16,
        fontWeight: 500,
        color:'#1b2833',
        [outerTheme.breakpoints.down('sm')]: {
            fontSize: 13,
        },
        root:{
            fontSize: 112,
        },
        display4: {
            fontSize: 112,
            fontWeight: 900,
            fontFamily: `'Exo 2'`,
            letterSpacing: '-.04em',
            lineHeight: 1,
            color: '#1b2833',
        },
        display3: {
            fontSize: 56,
            fontWeight: 500,
            fontFamily: `'Exo 2'`,
            letterSpacing: '-.02em',
            lineHeight: 1.35,
            color: '#1b2833',
        },
        display2: {
            fontSize: 45,
            fontWeight: 500,
            fontFamily: `'Exo 2'`,
            lineHeight: '48px',
            color: '#1b2833',
        },
        display1: {
            fontSize: 34,
            fontWeight: 500,
            fontFamily: `'Exo 2'`,
            lineHeight: '40px',
            color: '#1b2833',
        },


        headline: {
            fontSize: 60,
            lineHeight: '60px',
            fontWeight: 900,
            letterSpacing: 0.6,
            color: '#1b2833',
            fontFamily: `'Exo 2'`,
            [outerTheme.breakpoints.down('sm')]: {
                fontSize: 40,
                lineHeight: '40px',
                letterSpacing: 0.4,
            }
        },
        title: {
            fontSize: 40,
            lineHeight: '40px',
            fontWeight: 900,
            letterSpacing: 0.4,
            color: '#1b2833',
            fontFamily: `'Exo 2'`,
            [outerTheme.breakpoints.down('sm')]: {
                fontSize: 32,
                lineHeight: '32px',
                letterSpacing: 0.2,
            }
        },

        subheading: {
            fontSize: 32,
            lineHeight: '32px',
            fontWeight: 500,
            letterSpacing: 0.4,
            color: '#1b2833',
            fontFamily: `'Exo 2'`,
            [outerTheme.breakpoints.down('sm')]: {
                fontSize: 24,
                lineHeight: '24px',
                letterSpacing: 0.2,
            }
        },
        body2: {
            fontSize: 22,
            fontWeight: 400,
            letterSpacing: 0.7,
            lineHeight: '22px',
            color: '#1b2833',
            fontFamily: `'Exo 2'`,
            [outerTheme.breakpoints.down('sm')]: {
                fontSize: 20,
                lineHeight: '20px',
                letterSpacing: 0.6,
            }
        },
        body1: {
            fontSize: 18,
            lineHeight: '18px',
            fontWeight: 500,
            color: '#1b2833',
            fontFamily: `'Exo 2'`,
            [outerTheme.breakpoints.down('sm')]: {
                fontSize: 14,
                lineHeight: '14px',
            }
        },
        caption: {
            fontSize: 14,
            lineHeight: '14px',
            fontWeight: 500,
            letterSpacing: 0.4,
            fontFamily: `'Exo 2'`,
            display: 'inline-block',
        },
        button: {
            fontSize: 16,
            lineHeight: '20px',
            textTransform: 'uppercase',
            fontWeight: 900,
            fontFamily: `'Exo 2'`,
            letterSpacing: '0.4px',
            [outerTheme.breakpoints.down('sm')]: {
                fontSize: 16,
                lineHeight: '16px',
                letterSpacing: '0.3px',
            },
        },
    };

    const palette = {
        ...outerTheme.palette,
        error: {
            ...outerTheme.palette.error,
            A400: '#d7001e'
        },
        primary: {
            ...outerTheme.palette.primary,
            A200: '#fff',
            A700: '#fff',
            500: '#519be2'
        },
        accent: {
            ...outerTheme.palette.accent,
            A100: '#5b86e5',
            A400: '#5b86e5'

        },
        input: {
            ...outerTheme.palette.input,
            bottomLine: '#cbcbcb'

        },
        text: {
            ...outerTheme.palette.text,
            disabled: '#cbcbcb'
        }

    };

    const MuiInputPlaceholder = {
        opacity: 1,
        color: '#cbcbcb'
    };


    return {
        ...outerTheme,
        palette,
        typography,

        // popular classes
        greyBg: {
            border: '1px solid #e1e1e1',
            backgroundColor: '#f3f5f6',
            padding:'40px 0',
        },
        root: {
            margin: '0 auto',
            maxWidth: '1200px',
            width: '100%',
        },
        mainRoot: {
            border: '2px solid #e1e1e1',
        },
        gradientBg: {
            backgroundImage: 'linear-gradient(to top, #ffffff 0%, #e9eeee 100%)',
            padding:'60px 0',
        },

        // popular classes END

        shadows: [
            "none",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)", //use
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)",
            "0 0 6px 0 rgba(0, 0, 0, 0.2)"
        ],
        overrides: {
            MuiTypography: {
                root: {
                    fontFamily: `'Exo 2'`,

                },
            },
            MuiButton: {
                root: {
                    ...typography.button,
                    //height: 40,
                    backgroundColor: 'transparent',
                    borderRadius: 0,
                    lineHeight: '20px',
                    fontWeight: 300,
                    textAlign: 'center',
                    padding: '8px 16px',


                    [outerTheme.breakpoints.down('sm')]: {
                        minWidth: 120,
                    },


                    '&:hover': {
                        textDecoration: 'none',
                        backgroundColor: 'transparent',
                        '&$disabled': {
                            backgroundColor: '#cbcbcb',
                            color: '#fff',
                        },
                    }
                },
                flatPrimary: {
                    color: '#d7001e',

                },
                raised: {
                    minWidth: 160,
                    boxShadow: '0 0 7px 0 rgba(0, 0, 0, 0.3)',
                    backgroundColor: '#ffffff',
                    '&:hover': {
                        backgroundColor: '#f5f5f5'
                    },
                    '&$disabled': {
                        color: '#fff',
                        backgroundColor: '#cbcbcb',
                    },
                },
                raisedPrimary: {
                    backgroundImage: 'linear-gradient(to right, #519be2 0%, #36d1dc 100%)',
                    padding:'19px 8px',
                    color:'#fff',
                    position: 'relative',
                    zIndex: 1,
                    overflow: 'hidden',
                    transition: 'color 0.4s',
                    textTransform:'none',
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        bottom: '100%',
                        left: 0,
                        zIndex: -1,
                        transition: 'transform 0.4s',
                        transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
                        background: '#5b86e5',
                    },
                    '&:before': {
                        content: '""',
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        bottom: '100%',
                        left: 0,
                        zIndex: -1,
                        transition: 'transform 0.4s',
                        transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
                        background: '#36d1dc',
                    },
                    '&:hover': {
                        '&:before': {
                            transform: 'translate3d(0, 100%, 0)',
                        },
                        '&:after': {
                            transform: 'translate3d(0, 100%, 0)',
                            transitionDelay: '0.175s',
                        },
                    },
                },
                raisedContrast: {
                        backgroundColor:'rgba(255, 255, 255, 0.3)',
                        borderRadius: 3,
                        border: '1px solid #ffffff',
                        textTransform:'none',
                        color:'#fff',
                        display:'block',
                        margin:'10px auto 0 auto',
                    '&:hover': {
                            color:'#bbb'
                    }
                }
            },
            MuiMenuItem: {
                root: {
                    ...typography.body1,
                    minWidth: 100,
                    padding: 0,
                    height: 40,

                    '&:focus': {
                        background: 'transparent',
                    },

                    '&:hover': {
                        textDecoration: 'none',
                        backgroundColor: 'transparent',
                        color: '#d7001e',
                    },

                },
                selected: {
                    textDecoration: 'none',
                    backgroundColor: 'transparent',
                    color: '#d7001e',
                }
            },
            MuiMenu: {
                root: {
                    borderRadius: 0
                }
            },
            MuiList: {
                padding: {

                    paddingTop: 8,
                    paddingBottom: 4,
                    paddingLeft: 12,
                    paddingRight: 12,
                    [outerTheme.breakpoints.down('sm')]: {}
                }
            },
            MuiDrawer: {
                paper: {
                    [outerTheme.breakpoints.down('sm')]: {
                        paddingLeft: 12,
                        paddingRight: 12,
                    }
                }

            },
            MuiInput: {
                input: {
                    ...typography.caption,
                    borderRadius: 3,
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderColor: '#e1e1e1',
                    backgroundColor: '#ffffff',
                    boxSizing: 'border-box',
                    padding: '16px 50px',
                    width: '100%',

                },
                inkbar: {
                    '&:after': {
                        display: 'none',
                    },
                },
                underline: {
                    '&:hover:not($disabled):before': {
                        backgroundColor: 'none',
                        height: 0,
                    },

                },
                inputSingleline: {
                    height: 48,
                },
            },
            MuiFormLabel: {
                root: {
                    paddingLeft: 8,
                    paddingRight: 8,
                    ...typography.body1
                },

            },
            MuiFormControlLabel: {
                label: {
                    ...typography.body1
                }
            },
            MuiFormHelperText: {
                root: {
                    paddingLeft: 8,
                    paddingRight: 8,
                    fontSize: 14,
                    fontWeight: '500',
                },
                error: {
                    '&:after': {
                        content: ''
                    }
                }
            },
            MuiCheckbox: {
                default: {
                    color: '#4a4a4a',
                    width: 18,
                    height: 18,
                    marginRight: 11,
                    marginLeft: 10,
                }
            },
            MuiRadio: {
                default: {
                    color: '#4a4a4a',
                    width: 20,
                    height: 20,
                    marginRight: 11,
                    marginLeft: 25,
                }
            },
            MuiSwitch: {
                icon: {
                    width: 16,
                    height: 16,
                    boxShadow: 'unset',
                    backgroundColor: '#e2e2e2',
                    borderStyle: 'solid',
                    borderWidth: 0.5,
                    borderImageSource: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06) 20%, rgba(255, 255, 255, 0.0))',
                    borderImageSlice: 1
                },
                bar: {
                    border: 'solid 2px #e2e2e2',
                    borderRadius: 100,
                    width: 40,
                    height: 20,
                    backgroundColor: 'transparent',
                    opacity: 1,
                    marginTop: -12,
                    marginLeft: -20,

                },
                checked: {
                    transform: 'translateX(18px)',
                    '& + $bar': {
                        borderColor: palette.primary[500],
                        backgroundColor: 'transparent'
                    },
                    '& $icon': {
                        backgroundColor: '#c2a24d',
                    },

                },
            },
            MuiSnackbar: {
                anchorTopCenter: {
                    zIndex: 1000,
                    top: 80,

                    [outerTheme.breakpoints.down('sm')]: {
                        top: 70,
                    }
                }
            },
            MuiSnackbarContent: {
                root: {
                    height: 70,

                    backgroundColor: '#fff',
                    [outerTheme.breakpoints.down('md')]: {
                        width: 'auto'
                    },
                    [outerTheme.breakpoints.up('md')]: {
                        width: '100%',
                        maxWidth: 1168,
                    },
                    [outerTheme.breakpoints.down('sm')]: {
                        width: '100%',
                        top: 50,
                        maxWidth: 344,
                    }
                }
            },
            MuiTabIndicator: {
                colorAccent: {
                    backgroundColor: '#5b86e5',
                }
            },
            MuiTab: {
                root: {

                    ...typography.body2,
                    position:'relative',
                    // [outerTheme.breakpoints.up('md')]: {
                    //     minWidth: 'auto',
                    // },
                    '&:after':{
                        content:'""',
                        display:'block',
                        width:'1px',
                        height: 25,
                        backgroundColor:'rgba(255, 255, 255, .3)',
                        position:'absolute',
                        zIndex:2,
                        right:0,
                    },
                    '&:last-child':{
                        '&:after':{
                            display:'none',
                        },
                    },
                },
                label: {
                    color: '#c9d0da',
                },
            },
            MuiTabs: {
                flexContainer: {
                    // width:'379px',
                    // margin:'0 auto',
                },
            },
            MuiCardContent: {
                root: {
                    paddingBottom:'0 !important',
                },
            },
            MuiGridList: {
                root: {
                    marginTop:'22px !important',
                    height: '560px',
                },
            },
            // MuiGridListTile: {
            //     root: {
            //     overflow: 'hidden',
            //     display:'block !mportant',
            //     },
            //     tile: {
            //         '&:hover img': {
            //             transform: 'scale(1.2)',
            //             transition: 'all 1s ease-out',
            //             top: 0,
            //             left: 0,
            //             right: 0,
            //         },
            //     },
            // },
            MuiGridListTileBar: {
                root: {
                    background:'none',
                    alignItems: 'flex-start',
                    height: '100% !important',
                },
                title: {
                    whiteSpace:'normal',
                },
                subtitle: {
                    marginTop:25,
                },
                titleWrap: {
                    color: '#fff',
                    padding:'20px 0',
                },
            }

        }

    }
};

const outerTheme = createMuiTheme();

const IMetrTheme = ({children, ...props}) => (
    <MuiThemeProvider theme={outerTheme}>
        <MuiThemeProvider theme={theme} {...props}>
            {children}
        </MuiThemeProvider>
    </MuiThemeProvider>
);

export default IMetrTheme;