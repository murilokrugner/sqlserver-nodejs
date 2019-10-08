/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QE1010', {
    QE1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QE1_ENSAIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QE1_DESCPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QE1_DESCIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QE1_DESCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QE1_DTCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QE1_CARTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QE1_QTDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QE1_NIENSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QE1_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QE1_METODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QE1_CHAVE: {
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
    tableName: 'QE1010'
  });
};
