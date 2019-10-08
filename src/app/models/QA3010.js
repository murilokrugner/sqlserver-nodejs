/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QA3010', {
    QA3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QA3_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QA3_ESPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QA3_ANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QA3_TEXTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                           '
    },
    QA3_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QA3_DATINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QA3_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'QA3010'
  });
};
