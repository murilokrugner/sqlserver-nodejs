/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WFQ010', {
    WFQ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    WFQ_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    WFQ_ROOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    WFQ_HOST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    WFQ_PORTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    WFQ_FENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    WFQ_FEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    WFQ_FFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    WFQ_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    WFQ_ATIVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
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
    tableName: 'WFQ010'
  });
};
