/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AF8010', {
    AF8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AF8_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AF8_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AF8_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                          '
    },
    AF8_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AF8_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AF8_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AF8_GETTRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AF8_TPPRJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AF8_ORCAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AF8_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_START: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AF8_FINISH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AF8_DTATUI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AF8_DTATUF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AF8_CALEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AF8_LOCPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AF8_FASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AF8_PRJREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_CTRUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AF8_TPPERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_INIPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AF8_FIMPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AF8_TPCUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_CNVPRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_DTCONV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AF8_DELIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_MASCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    AF8_NMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF8_NMAXF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF8_RECALC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_ULMES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AF8_TRUNCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_BDI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF8_VALBDI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF8_BDIPAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF8_AUTCUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_ENCPRJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_REALOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_PRIREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_CUSOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_CUSOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_REAFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_USAAJT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_AJCUST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_PAR001: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_PAR002: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_PAR003: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_PAR004: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_PAR005: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_PAR006: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF8_ART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AF8_AJUDIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF8_IDPROJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AF8_CNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'AF8010'
  });
};
