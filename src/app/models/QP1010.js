/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QP1010', {
    QP1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP1_ENSAIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP1_DESCPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QP1_DESCIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QP1_DESCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QP1_DTCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP1_CADR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP1_TPCART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP1_CARTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QP1_QTDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QP1_NIENSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP1_METODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QP1_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP1_CHAVE: {
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
    }
  }, {
    tableName: 'QP1010'
  });
};
