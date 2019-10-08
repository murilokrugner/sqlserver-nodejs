/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CF8010', {
    CF8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF8_TPREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CF8_INDOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CF8_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CF8_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF8_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CF8_DTOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CF8_VLOPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF8_CSTPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF8_BASPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF8_ALQPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF8_VALPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF8_CSTCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF8_BASCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF8_ALQCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF8_VALCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF8_CODBCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF8_INDORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CF8_CODCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CF8_CODCCS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CF8_DESCPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CF8_TNATRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CF8_CNATRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CF8_GRPNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF8_DTFIMN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CF8_SCORGP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CF8_SALDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF8_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    CF8_RECBRU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CF8_PART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CF8_PROJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CF8_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CF8_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CF8_EXCPRB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CF8010'
  });
};
