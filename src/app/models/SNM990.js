/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SNM990', {
    NM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NM_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NM_DATSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NM_HORSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NM_CBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NM_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NM_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NM_CDHSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NM_CDHREJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NM_SITSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NM_USRSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NM_USRAPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NM_TIPOSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NM_DTAPVRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NM_HRAPVRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NM_DTBAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NM_FILDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NM_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NM_MOTBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NM_QTDBX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NM_PERCBX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NM_VLRBAIX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NM_VLVENDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NM_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NM_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NM_CCONTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NM_CCORREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NM_CDEPREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NM_CDDEPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NM_CDESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NM_CUSTBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NM_CCCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NM_CCDESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NM_CCCDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NM_CCCDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NM_ITBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NM_ITCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NM_ITDESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NM_ITCDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NM_ITCDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NM_CLVLBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NM_CLVLCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NM_CLVLDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NM_CLVLCDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NM_CLVLDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NM_GERANF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NM_NOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NM_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NM_TESNFS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NM_CLASNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NM_TESNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NM_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NM_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NM_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NM_WFID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
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
    }
  }, {
    tableName: 'SNM990'
  });
};
