/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GWF010', {
    GWF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GWF_NRCALC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWF_EMIREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GWF_EMIDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GWF_EMIRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GWF_EMIPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GWF_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GWF_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GWF_TPCALC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GWF_TPFRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GWF_FINCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GWF_CIDORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    GWF_CIDDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    GWF_ENDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    GWF_BAIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    GWF_CIDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    GWF_DTCRIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWF_HRCRIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GWF_USUCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    GWF_DTPREN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWF_HRPREN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GWF_CARREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    GWF_NRROM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWF_VLAJUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWF_TPTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GWF_BASISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWF_PCISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWF_VLISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWF_BASICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWF_PCICMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWF_PCREIC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWF_VLICMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWF_ICMRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWF_BAPICO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWF_VLPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWF_VLCOFI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWF_FILPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GWF_NRPREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWF_NRCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWF_IDFRVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GWF_AGRUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GWF_SEQTRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    GWF_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    GWF_IMPOST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GWF_CRDICM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GWF_CRDPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GWF_NROCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWF_ADICIS: {
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
    GWF_CDESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GWF_CDTPSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GWF_EMISDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GWF_SERDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GWF_NRDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    GWF_DTEMDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'GWF010'
  });
};
