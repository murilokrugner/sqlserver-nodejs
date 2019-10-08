/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QIE010', {
    QIE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QIE_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QIE_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QIE_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QIE_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QIE_ETAPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QIE_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QIE_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QIE_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QIE_ANEXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    QIE_PEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QIE_TIPODC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
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
    tableName: 'QIE010'
  });
};
