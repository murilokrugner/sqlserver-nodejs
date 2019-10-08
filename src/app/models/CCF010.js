/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CCF010', {
    CCF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CCF_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CCF_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CCF_TPCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CCF_IDSEJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CCF_IDVARA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CCF_NATJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CCF_DESCJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CCF_DTSENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CCF_NATAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CCF_DTADM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    CCF_TIPCRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CCF_TIPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CCF_NRDCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                        '
    },
    CCF_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CCF_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CCF_MOTSUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CCF_CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CCF_IDDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CCF_PERAPU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CCF_CODREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CCF_RESACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CCF_INDAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CCF_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CCF_DTFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CCF_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CCF_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CCF_IDITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CCF_TRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CCF_INDSUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CCF_SUSEXI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CCF_MONINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CCF010'
  });
};
